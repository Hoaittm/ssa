// service/menuService.js
const db = require('../../src/config/conectDatabase');

const getMenus = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM menus', [], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

const getMenuById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM menus WHERE id = ?', [id], (err, data) => {
            if (err) {
                return reject(err);
            }
            if (data.length === 0) {
                return reject(new Error('Menu not found'));
            }
            resolve(data[0]);
        });
    });
};

    const createMenu = (menuData) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO menus (name, slug, parent_id) VALUES (?, ?,?)', [menuData.name, menuData.slug,menuData.parent_id], (err, result) => {
                if (err) {
                    console.error('Error occurred while inserting menu:', err); // Log lỗi
                    return reject(err);
                }
                resolve({ id: result.insertId, ...menuData });
            });
        });
    };

    const updateMenu = (id, menuData) => {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE menus SET name = ?, slug = ?, parent_id = ? WHERE id = ?', 
                [menuData.name, menuData.slug, menuData.parent_id, id], // Cập nhật parent_id
                (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    if (result.affectedRows === 0) {
                        return reject(new Error('Menu not found'));
                    }
                    resolve({ id, ...menuData });
                }
            );
        });
    };
    

const deleteMenu = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM menus WHERE id = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            if (result.affectedRows === 0) {
                return reject(new Error('Menu not found'));
            }
            resolve({ message: 'Menu deleted successfully' });
        });
    });
};

module.exports = {
    getMenus,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu
};
