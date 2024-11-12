const db = require('../config/conectDatabase');

const getAllProductShopSale = () => {
    const sql = 'SELECT * FROM shop_product WHERE priceSale IS NOT NULL';
    return new Promise((resolve, reject) => {
        db.query(sql, [], (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};
const getProductShopById = async (id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM shop_product WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results); // Trả về mảng sản phẩm
      });
    });
  };
const getProductShopImages = async (product_id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM product_images WHERE product_id = ?'; // Use ? as a placeholder for parameter binding
      db.query(query, [product_id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results); // Return the array of product images
      });
    });
  };
  const getProductShopType = async (type_id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM product_typeItem pti JOIN product_type pt ON pti.type_id= pt.productType_id WHERE pti.product_id = ?'; // Use ? as a placeholder for parameter binding
      db.query(query, [type_id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results); // Return the array of product images
      });
    });
  };
  // const getProductShopType = async (type_id) => {
  //   return new Promise((resolve, reject) => {
  //     const query = 'SELECT * FROM product_type WHERE productType_id = ?'; // Use ? as a placeholder for parameter binding
  //     db.query(query, [type_id], (err, results) => {
  //       if (err) {
  //         return reject(err);
  //       }
  //       resolve(results); // Return the array of product images
  //     });
  //   });
  // };
     
  
const getProductShopCategory = async (category_id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM shop_product WHERE categoryshop_id = ?';
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
const getProductShopSubCategory = async (subcategories) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM shop_product WHERE subcategories = ?';
        db.query(query, [subcategories], (err, results) => {
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

module.exports ={
    getAllProductShopSale,
    getProductShopById,
    getProductShopCategory,
    getProductShopSubCategory,
    getProductShopImages,

    getProductShopType
   
};