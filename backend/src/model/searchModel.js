const db = require('../config/conectDatabase');

const searchProduct = (searchQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Truy vấn từ bảng products
            const productsQuery = `SELECT * FROM products WHERE name LIKE ?`;
            const products = await new Promise((resolve, reject) => {
                db.query(productsQuery, [`%${searchQuery}%`], (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                });
            });

            // Truy vấn từ bảng shop_product
            const shopProductsQuery = `SELECT * FROM shop_product WHERE name LIKE ?`;
            const shopProducts = await new Promise((resolve, reject) => {
                db.query(shopProductsQuery, [`%${searchQuery}%`], (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                });
            });

            // Kết hợp kết quả từ cả hai bảng
            const combinedResults = [...products, ...shopProducts];
            resolve(combinedResults);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = {
    searchProduct
};
