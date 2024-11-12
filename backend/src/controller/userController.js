const userService = require('../service/userService');
const sendMail = require('../helpers/sendMail');
const {OAuth2Client} = require('google-auth-library')
const CLIENT_ID=process.env.CLIENT_ID;
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const bcrypt = require('bcryptjs');
const userModel = require('../model/userModel');
const registerUser = async (req, res) => {
    try {
        const result = await userService.register(req.body);
        res.json(result);

        // Gửi email xác nhận sau khi đăng ký thành công
        await sendMail({
            email: req.body.email,
            subject: 'Cộng Cà Phê - Xác nhận tài khoản khách hàng',
            html: `
            <div style="text-align: center; font-family: Arial, sans-serif; padding: 20px;">
                <h1 style="color: #000;">Cộng Cà Phê</h1>
                <h2 style="color: #000;">Chào mừng bạn đến với Cộng Cà Phê</h2>
                <p style="color: #666; font-size: 18px;">
                    Chúc mừng bạn đã kích hoạt tài khoản khách hàng thành công. Lần mua hàng tiếp theo, hãy đăng nhập để việc thanh toán thuận tiện hơn.
                </p>
                <a href="http://localhost:3000/" target="_blank" style="
                    display: inline-block;
                    padding: 25px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #1666a1;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                ">
                    Đến cửa hàng của chúng tôi
                </a>
            </div>
            `
        });
    } catch (err) {
        res.json({ error: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        // Extract email and password from request body
        const { email, password } = req.body;

        // Call the service to authenticate the user
        const user = await userService.login(email, password);

    
        // If authentication is successful, send the user data
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        // If there's an error during login (e.g., invalid credentials)
        console.error('Login error:', err);
        res.status(401).json({ message: err.message });
    }
};



const getProfileById = async (req, res) => {
    const { id } = req.params; // Extract 'id' from URL params
    try {
        const user = await userService.getProfile(id); // Retrieve user profile
        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // Return 404 if user not found
        }
        res.json(user); // Send user data as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return any server error
    }
};


// Placeholder for login success handler if needed in the future
const loginSuccess = (req, res) => {
    res.status(200).json({ message: 'Login successful' });
};

const verifyToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of your app
        });
        return ticket.getPayload(); // This will return the payload of the token
    } catch (err) {
        console.error('Error verifying token:', err); // Add logging
        throw new Error('Token verification failed: ' + err.message);
    }
};

const googleLogin = async (req, res) => {
    const { token } = req.body;

    try {
        // Verify the token using the verifyToken function
        const payload = await verifyToken(token);
        const { email, name, sub } = payload; // Extracting user details from the payload

        // Check if the user already exists
        let userAccount = await userService.findOne({ email, username: sub });
console.log("User found:", userAccount);

if (!userAccount) {
    userAccount = await userService.create({
        lastname: name,
        email: email,
        username: sub
    });
    console.log("User created:", userAccount);
}

if (userAccount) {
    console.log("Returning user data:", {
       
        lastname: userAccount.lastname,
        email: userAccount.email,   
        username: userAccount.username
    });
} else {
    console.error("User account is undefined after creation.");
}



        // Respond with the account details
        console.log("Returning user data:", {
            lastname: userAccount.lastname,
            email: userAccount.email,   
            username: userAccount.username
        });
        
        // Respond with the account details
        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: userAccount.id,
                firstname: userAccount.firstname,
                lastname: userAccount.lastname,
                email: userAccount.email,
                username: userAccount.username
            }
        });
        
        
    } catch (error) {
        console.error("Error during Google login:", error);
        return res.status(401).json({ message: "Invalid token or authentication error." });
    }
};
const updateUser = async (req, res) => {
    console.log('Request body:', req.body); // Kiểm tra dữ liệu request
    const { userId } = req.params;
    const { firstname, lastname, phone, address } = req.body;

    try {
        // Cập nhật người dùng trong cơ sở dữ liệu
        const updatedUser = await userModel.updateUser(userId, { firstname, lastname, phone, address });
        
        if (!updatedUser) {
            // Nếu người dùng không tồn tại, trả về lỗi 404
            return res.status(404).json({ error: 'User not found' });
        }
        
        // Trả về người dùng đã cập nhật dưới dạng JSON
        res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (err) {
        console.error('Update error:', err);
        res.status(500).json({ error: 'An error occurred during the update' });
    }
};
const facebookLogin = async (req, res) => {
    const { token } = req.body;

    try {
        // Verify the token (you may need a specific verify function for Facebook tokens)
        const payload = await verifyToken(token);
        const { email, name, sub } = payload;

        // Check if the user already exists
        let userAccount = await userService.findOne({ email, username: sub });
        console.log("User found:", userAccount);

        // If user does not exist, create a new user account
        if (!userAccount) {
            userAccount = await userService.create({
                lastname: name,
                email: email,
                username: sub
            });
            console.log("User created:", userAccount);
        }

        if (userAccount) {
            console.log("Returning user data:", {
                lastname: userAccount.lastname,
                email: userAccount.email,
                username: userAccount.username
            });

            // Send user data back to the client
            return res.status(200).json({
                message: 'Login successful',
                user: {
                    id: userAccount.id,
                    firstname: userAccount.firstname,
                    lastname: userAccount.lastname,
                    email: userAccount.email,
                    username: userAccount.username
                }
            });
        } else {
            console.error("User account is undefined after creation.");
            throw new Error("User account creation failed.");
        }
    } catch (error) {
        console.error("Error during Facebook login:", error);
        return res.status(401).json({ message: "Invalid token or authentication error." });
    }
};


module.exports = {
    registerUser,
    loginUser,
    getProfileById, 
    loginSuccess,
    googleLogin,
    updateUser,
    facebookLogin
};
