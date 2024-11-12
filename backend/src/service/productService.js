const productModel = require('../model/productModel.js');

const getProducts = () => {
    return productModel.getAllProducts();
};

const getProductById = (category_id) => {
    return productModel.getProductById(category_id);
};

const createProduct = (productData) => {
    return productModel.createProduct(productData);
};

const updateProduct = (id, productData) => {
    return productModel.updateProduct(id, productData);
};

const getProductCategory = (categoryId) => {
  return productModel.getProductCategory(categoryId);
};

const deleteProduct = (id) => {
    return productModel.deleteProduct(id);
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductCategory
};
