const db = require('../config/conectDatabase');

const bcrypt = require("bcryptjs");
const saltRounds = 10;

// Hàm để đăng ký người dùng
const registerUser = async (userData) => {
    const sql = 'INSERT INTO users (`lastname`, `firstname`, `email`, `password`, `gender`, `phone`, `address`) VALUES (?)';
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds); // Mã hóa mật khẩu

    const values = [
        userData.lastname,
        userData.firstname,
        userData.email,
        hashedPassword, // Sử dụng mật khẩu đã mã hóa
        userData.gender,
        userData.phone,
        userData.address
    ];
    
    return new Promise((resolve, reject) => {
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.error('Error during user registration:', err); // Ghi lỗi vào console
                return reject(err);
            }
            resolve(data);
        });
    });
};
const findUserById = (userId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
            if (err) {
                console.error('Error fetching user by ID:', err); // Add logging
                return reject(err);
            }
            resolve(results[0]);
        });
    });
};

const createUser = (userData) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users SET ?', userData, (err, result) => {
            if (err) {
                console.error('Error creating user:', err); // Add logging
                return reject(err);
            }
            resolve(result);
        });
    });
};


const findUserByEmail = (email) => {
    const sql = "SELECT * FROM users WHERE email = ?";

    return new Promise((resolve, reject) => {
        db.query(sql, [email], (err, res) => {
            if (err) {
                console.error('SQL Error:', err);
                return reject(err);
            }

            if (res.length === 0) {
                // No user found with the given email
                return resolve(null); // Resolve with null when user is not found
            }

            resolve(res[0]); // Return the first (and likely only) user
        });
    });
};




// Hàm để đăng nhập người dùng với email và mật khẩu
const loginUser = function (email, password, result) {
    const sql = "SELECT * FROM users WHERE email = ?";
    
    // Thực hiện truy vấn đến cơ sở dữ liệu để lấy thông tin người dùng dựa trên email
    db.query(sql, [email], function (err, res) {
        if (err) {
            console.log('SQL Error: ', err.sqlMessage);
            console.log('Received email:', email);
console.log('Received password:', password);

            return result(err, null); // Trả về lỗi SQL
        }

        if (res.length === 0) {
            // Không tìm thấy người dùng với email này
            return result({ status: 401, message: 'Email hoặc mật khẩu không hợp lệ!' }, null);
        }

        // So sánh mật khẩu đã mã hóa với mật khẩu người dùng nhập
        bcrypt.compare(password, res[0].password, function (err, isMatch) {
            if (err) {
                console.log('Compare Error: ', err);
                return result(err, null);
            }
        
            console.log('Password match result:', isMatch);
            if (!isMatch) {
                return result({ status: 401, message: 'Email hoặc mật khẩu không hợp lệ!' }, null);
            }
            console.log('Hashed password from database:', res[0].password);

            console.log('Login successful');
            return result(null, res);
        });
        
    });
};



const getProfile = async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    try {
        const [rows] = await db.query(sql, [id]);
        console.log("Query result rows:", rows);
        return rows; // Ensure only rows are returned
    } catch (err) {
        console.error('Database error in getProfile:', err);
        throw new Error('Failed to fetch user profile.'); // Add descriptive error for logging
    }
};


  const getGoogle = async (userData) => {
    const sql = 'INSERT INTO users (`lastname`, `firstname`, `email`, `password`, `gender`, `phone`, `address`,`id`) VALUES (?)';
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds); // Mã hóa mật khẩu

    const values = [
        userData.id,
        userData.lastname,
        userData.firstname,
        userData.email,
        hashedPassword, // Sử dụng mật khẩu đã mã hóa
        userData.gender,
        userData.phone,
        userData.address
    ];
    
    return new Promise((resolve, reject) => {
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.error('Error during user registration:', err); // Ghi lỗi vào console
                return reject(err);
            }
            resolve(data);
        });
    });
};
const getFacebook = async (userData) => {
    const sql = 'INSERT INTO users (`id`, `lastname`, `firstname`, `email`, `password`, `gender`, `phone`, `address`) VALUES (?)';
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds); // Hash the password

    const values = [
        userData.id,
        userData.lastname,
        userData.firstname,
        userData.email,
        hashedPassword, // Use the hashed password
        userData.gender,
        userData.phone,
        userData.address
    ];

    return new Promise((resolve, reject) => {
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.error('Error during user registration:', err);
                return reject(err);
            }
            resolve(data);
        });
    });
};

const updateUser = async (userId, userData) => {
    const sql = 'UPDATE users SET firstname = ?, lastname = ?, phone = ?, address = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [userData.firstname, userData.lastname, userData.phone, userData.address, userId], (err, result) => {
            if (err) {
                console.error('Error occurred while updating user:', err); // Ghi log lỗi
                return reject(err);
            }
            if (result.affectedRows === 0) {
                return reject(new Error('User not found')); // Trả về lỗi nếu không tìm thấy người dùng
            }
            resolve({ userId, ...userData }); // Trả về id và các trường đã cập nhật
        });
    });
};




module.exports = {
    registerUser,
    loginUser,
    getProfile,
    findUserByEmail,
    getGoogle,
    findUserById,
    createUser,
    updateUser,
    getFacebook
};
