const db = require('../config/conectDatabase');

// Lấy tất cả menu
const getAllMenus = () => {
    const sql = 'SELECT * FROM menus';
    return new Promise((resolve, reject) => {
        db.query(sql, [], (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

// Lấy menu theo ID
const getMenuById = (id) => {
    const sql = 'SELECT * FROM menus WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, data) => {
            if (err) reject(err);
            resolve(data[0]); // Chỉ trả về một menu
        });
    });
};

// Tạo menu mới
const createMenu = (menuData) => {
    const sql = 'INSERT INTO menus (`name`,`slug`,`parent_id`) VALUES (?)';
    const values = [
        menuData.name,
        menuData.slug,
        menuData.parent_id
    ];
    return new Promise((resolve, reject) => {
        db.query(sql, [values], (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

// Cập nhật menu
const updateMenu = (id, menuData) => {
    const sql = 'UPDATE menus SET name = ?, slug = ?, parent_id = ? WHERE id = ?'; // Đảm bảo cập nhật các trường cần thiết
    return new Promise((resolve, reject) => {
        db.query(sql, [menuData.name, menuData.slug, menuData.parent_id, id], (err, result) => {
            if (err) {
                console.error('Error occurred while updating menu:', err); // Ghi log lỗi
                return reject(err);
            }
            if (result.affectedRows === 0) {
                return reject(new Error('Menu not found')); // Trả về lỗi nếu không tìm thấy menu
            }
            resolve({ id, ...menuData }); // Trả về id và các trường đã cập nhật
        });
    });
};


// Xóa menu
const deleteMenu = (id) => {
    const sql = 'DELETE FROM menus WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) reject(err);
            resolve(result.affectedRows); // Trả về số lượng dòng đã xóa
        });
    });
};

module.exports = {
    getAllMenus,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu
};
