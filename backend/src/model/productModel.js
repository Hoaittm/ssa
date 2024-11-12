const db = require('../config/conectDatabase');
const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products';
        db.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
const getProductById = async (categoryId) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products WHERE id = ?';
      db.query(query, [categoryId], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results); // Trả về mảng sản phẩm
      });
    });
  };
  
const getProductCategory = async (category_id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products WHERE category_id = ?';
        db.query(query, [category_id], (err, results) => {
            if (err) {
                reject(err);
            } else if (results.length === 0) {
                reject(new Error('Product not found'));
            } else {
                resolve(results);
            }
        });
    });
};

const createProduct = (productData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO products SET ?';
        db.query(query, productData, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve({ id: results.insertId, ...productData });
            }
        });
    });
};

const updateProduct = (id, productData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE products SET ? WHERE id = ?';
        db.query(query, [productData, id], (err, results) => {
            if (err) {
                reject(err);
            } else if (results.affectedRows === 0) {
                reject(new Error('Product not found'));
            } else {
                resolve({ id, ...productData });
            }
        });
    });
};

const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM products WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else if (results.affectedRows === 0) {
                reject(new Error('Product not found'));
            } else {
                resolve({ message: 'Product deleted successfully' });
            }
        });
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductCategory
};
