const categoriesShopModel = require('../model/categoryShopModel');
const getAllCategoriesShop = () => {
    return categoriesShopModel.getAllCategoriesShop();
 };
 const getCategoriesShopById = (id) => {
    return categoriesShopModel.getCategoriesShopById(id);
 };
 const getCategoriesShopParentId = (categoryshop_id) => {
    return categoriesShopModel.getCategoriesShopParentId(categoryshop_id);
 };
 
module.exports = {
    getAllCategoriesShop,
    getCategoriesShopById,
    getCategoriesShopParentId
}