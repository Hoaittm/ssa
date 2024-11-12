const productShopModel = require('../model/productShopModel');
const getAllProductShopSale = () => {
    return productShopModel.getAllProductShopSale();
 };
 const getProductShopById = (id) => {
    return productShopModel.getProductShopById(id);
};
const getProductShopCategory = (categoryshop_id) => {
    return productShopModel.getProductShopCategory(categoryshop_id);
};
const getProductShopSubCategory = (subcategories) => {
    return productShopModel.getProductShopSubCategory(subcategories);
};
const getProductShopImages = (product_id) => {
    return productShopModel.getProductShopImages(product_id);
};
const getProductShopType = (type_id) => {
    return productShopModel.getProductShopType(type_id);
};
module.exports = {
    getAllProductShopSale,
    getProductShopById,
    getProductShopCategory,
    getProductShopSubCategory,
    getProductShopImages,
    getProductShopType
}