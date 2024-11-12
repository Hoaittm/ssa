const db = require('../config/conectDatabase');

const getAllCategories = () => {
    const sql = 'SELECT * FROM categories';
    return new Promise((resolve, reject) => {
        db.query(sql, [], (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};
// Lấy categories theo ID
const getCategoriesById = (id) => {
    const sql = 'SELECT * FROM categories WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, data) => {
            if (err) reject(err); // If there's an error with the query, reject the promise
            if (data.length > 0) {
                resolve(data[0]); // If data is found, resolve the first row
            } else {
                reject(new Error('categories not found')); // If no data, reject with a "not found" error
            }
        });
    });
};


// Tạo categories mới
const createCategories = (categoriesData) => {
    const sql = 'INSERT INTO categories (name, slug) VALUES (?, ?)';
    const values = [
        categoriesData.name,
        categoriesData.slug,
    ];

    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error occurred while inserting categories:', err); // Ghi log lỗi
                return reject(err); // Trả về lỗi
            }
            resolve({ id: result.insertId, ...categoriesData }); // Trả về ID và dữ liệu
        });
    });
};


// Cập nhật categories
const updateCategories = (id, categoriesData) => {
    const sql = 'UPDATE categories SET name = ?, slug = ? WHERE id = ?'; // Đảm bảo cập nhật các trường cần thiết
    return new Promise((resolve, reject) => {
        db.query(sql, [categoriesData.name, categoriesData.slug, categoriesData. id], (err, result) => {
            if (err) {
                console.error('Error occurred while updating categories:', err); // Ghi log lỗi
                return reject(err);
            }
            if (result.affectedRows === 0) {
                return reject(new Error('categories not found')); // Trả về lỗi nếu không tìm thấy categories
            }
            resolve({ id, ...categoriesData }); // Trả về id và các trường đã cập nhật
        });
    });
};


// Xóa categories
const deleteCategories = (id) => {
    const sql = 'DELETE FROM categories WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) reject(err);
            resolve(result.affectedRows); // Trả về số lượng dòng đã xóa
        });
    });
};
module.exports = {
    getAllCategories,
    getCategoriesById,
    createCategories,
    updateCategories,
    deleteCategories,
 
};
