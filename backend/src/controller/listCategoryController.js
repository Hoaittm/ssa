const listCategoryService = require('../service/listCategoryService');

const getAllCategories = async (req, res) => {
    try {
        const categories = await listCategoryService.getCategories();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Controller function to get category by ID
const getCategoriesById = async (req, res) => {
    const { id } = req.params; // Extract the 'id' from request parameters
    try {
        const category = await listCategoryService.getCategoriesById(id); // Call the service method
        if (!category) {
            return res.status(404).json({ message: 'Category not found' }); // Return 404 if not found
        }
        res.json(category); // Return the found category as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Catch and return any server errors
    }
};




const createCategories = async (req, res) => {
    try {
        const categories = await createCategories(req.body); // Gọi hàm createCategories
        res.status(201).json(categories); // Trả về phản hồi thành công
    } catch (err) {
        console.error("Error creating category:", err); // Log the error
        res.status(500).json({ error: err.message }); // Trả về thông báo lỗi
    }
};

const updateCategories = async (req, res) => {
    const { id } = req.params;
    try {
        const updateCategories = await listCategoryService.updateCategories(id, req.body);
        res.json(updateCategories);
    } catch (err) {
        res.status(err.message === 'Categories not found' ? 404 : 500).json({ error: err.message });
    }
};

const deleteCategories = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await listCategoryService.deleteCategories(id);
        res.json(result);
    } catch (err) {
        res.status(err.message === 'Categories not found' ? 404 : 500).json({ error: err.message });
    }
};
module.exports = {
    getAllCategories,
    getCategoriesById,
    createCategories,
    updateCategories,
    deleteCategories,
 
};
