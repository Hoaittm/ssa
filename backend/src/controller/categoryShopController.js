const categoriesShopService = require('../service/categoryShopService');
const getAllCategoriesShop = async (req, res) => {
    try {
        const categories = await categoriesShopService.getAllCategoriesShop();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getCategoriesShopById = async (req, res) => {
    const { id } = req.params; // Extract the 'id' from request parameters
    try {
        const category = await categoriesShopService.getCategoriesShopById(id); // Call the service method
        if (!category) {
            return res.status(404).json({ message: 'Category not found' }); // Return 404 if not found
        }
        res.json(category); // Return the found category as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Catch and return any server errors
    }
};
const getCategoriesShopParentId = async (req, res) => {
    const { categoryshop_id } = req.params; // Extract the 'id' from request parameters
    try {
        const category = await categoriesShopService.getCategoriesShopParentId(categoryshop_id); // Call the service method
        if (!category) {
            return res.status(404).json({ message: 'Category not found' }); // Return 404 if not found
        }
        res.json(category); // Return the found category as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Catch and return any server errors
    }
};
module.exports ={
    getAllCategoriesShop,
    getCategoriesShopById,
    getCategoriesShopParentId
}