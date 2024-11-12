const userModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
const db = require('../config/conectDatabase')

const saltRounds = 10; // Số vòng muối để tăng cường bảo mật

// Hàm đăng ký người dùng
const register = async (userData) => {
    try {
        const result = await userModel.registerUser(userData);
        return result; // Trả về kết quả của đăng ký
    } catch (err) {
        console.error('Error during registration:', err); // Ghi lỗi vào console để dễ dàng theo dõi
        throw new Error('Failed to register user.'); // Trả về lỗi tổng quát cho client
    }
};
const getGoogle = async (userData) => {
    try {
        const result = await userModel.getGoogle(userData);
        return result; // Trả về kết quả của đăng ký
    } catch (err) {
        console.error('Error during registration:', err); // Ghi lỗi vào console để dễ dàng theo dõi
        throw new Error('Failed to register user.'); // Trả về lỗi tổng quát cho client
    }
};
const getFacebook = async (userData) => {
    try {
        const result = await userModel.getFacebook(userData);
        return result; // Trả về kết quả của đăng ký
    } catch (err) {
        console.error('Error during registration:', err); // Ghi lỗi vào console để dễ dàng theo dõi
        throw new Error('Failed to register user.'); // Trả về lỗi tổng quát cho client
    }
};
// Hàm đăng nhập người dùng
const login = async (email, password) => {
    try {
        // Retrieve user by email
        const user = await userModel.findUserByEmail(email);
        
        // If user doesn't exist, throw an error
        if (!user) {
            throw new Error('User not found');
        }
        
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        // If password doesn't match, throw an error
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        
        // Return the authenticated user as an object
        return user; // Ensure this is a single user object
    } catch (err) {
        console.error('Error during login:', err.message);
        throw new Error('Failed to login. Please check your credentials.');
    }
};


const findUserByEmail = async (email) => {
    const user = await userModel.findOne({ email: email });
    return user;
};


const getProfile = (id) => {
    return userModel.getProfile(id);
};

const findOne = async ({ email }) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE email = ? ';
        db.query(query, [email], (err, results) => {
            if (err) {
                console.error('Error finding user:', err);
                return reject(err);
            }
            resolve(results[0]); // Return the first user found
        });
    });
};


const create = async (userData) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users SET ?', userData, (err, result) => {
            if (err) {
                console.error('Error creating user:', err);
                return reject(err);
            }
            resolve(result.insertId); // Return the newly created user's ID
        });
    });
};
const updateUser = async(userId) =>{
    return await userModel.updateUser(userId);
}
module.exports = {
    register,
    login,
    getProfile,
    findUserByEmail,
    getGoogle,
    findOne,create,
    updateUser,
    getFacebook
};
