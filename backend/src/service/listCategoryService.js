const categoriesModel = require('../model/listCategoryModel');

const getCategories = async () => {
    try {
        const categories = await categoriesModel.getAllCategories();
        return categories;
    } catch (err) {
        throw new Error(err.message);
    }
};
const getCategoriesById = (id) => {
   return categoriesModel.getCategoriesById(id);
};

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


const updateCategories = (id, categoriesData) => {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE categories SET name = ?, slug = ? WHERE id = ?', 
                [categoriesData.name, categoriesData.slug, categoriesData. id], // Cập nhật parent_id
                (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    if (result.affectedRows === 0) {
                        return reject(new Error('categories not found'));
                    }
                    resolve({ id, ...categoriesData });
                }
            );
        });
    };
    

const deleteCategories = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM categories WHERE id = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            if (result.affectedRows === 0) {
                return reject(new Error('categories not found'));
            }
            resolve({ message: 'categories deleted successfully' });
        });
    });
};
module.exports = {
    getCategories,
    getCategoriesById,
    createCategories,
    updateCategories,
    deleteCategories,
};
