const db = require('../config/conectDatabase');

const getAllCategoriesShop = () => {
    const sql = 'SELECT * FROM shop_categories WHERE parent_id = 0';
    return new Promise((resolve, reject) => {
        db.query(sql, [], (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};
const getCategoriesShopById = (id) => {
    const sql = 'SELECT * FROM shop_categories WHERE id = ?';
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
const getCategoriesShopParentId = (categoryshop_id) => {
    const sql = 'SELECT * FROM shop_categories WHERE parent_id = ?'; // Sử dụng ? làm tham số
    return new Promise((resolve, reject) => {
        db.query(sql, [categoryshop_id], (err, data) => {
            if (err) {
                reject(err); // Nếu có lỗi trong truy vấn, từ chối promise
            } else if (data.length > 0) {
                resolve(data); // Nếu tìm thấy dữ liệu, giải quyết tất cả các hàng
            } else {
                reject(new Error('Categories not found')); // Nếu không có dữ liệu, từ chối với lỗi "not found"
            }
        });
    });
};


module.exports ={
    getAllCategoriesShop,
    getCategoriesShopById,
    getCategoriesShopParentId

};