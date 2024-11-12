const productShopService = require('../service/productShopService');
const getAllProductShopSale = async (req, res) => {
    try {
        const product = await productShopService.getAllProductShopSale();
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getProductShopById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productShopService.getProductShopById(id);
        res.json(product);
    } catch (err) {
        res.status(err.message === 'Product not found' ? 404 : 500).json({ error: err.message });
    }
};
const getProductShopImages = async (req, res) => {
    const { product_id } = req.params;
    try {
        const product = await productShopService.getProductShopImages(product_id);
        res.json(product);
    } catch (err) {
        res.status(err.message === 'Product not found' ? 404 : 500).json({ error: err.message });
    }
};
const getProductShopType = async (req, res) => {
    const { type_id } = req.params;
    try {
        const product = await productShopService.getProductShopType(type_id);
        res.json(product);
    } catch (err) {
        res.status(err.message === 'Product not found' ? 404 : 500).json({ error: err.message });
    }
};
const getProductShopCategory = async (req, res) => {
    const { categoryshop_id } = req.params; // Extract category ID from request parameters
    console.log(`Received request for categoryId: ${categoryshop_id}`); // Log the request parameter

    try {
        const products = await productShopService.getProductShopCategory(categoryshop_id); // Call the service to get products
        console.log('Products retrieved:', products); // Log the retrieved products

        // Check if no products were found
        if (products.length === 0) {
            console.log('No products found for category:', categoryshop_id); // Log if no products found
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm cho danh mục này' }); // Send 404 response
        }

        // Send the retrieved products as a response
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err.message); // Log any errors
        res.status(500).json({ error: err.message }); // Send 500 response for server error
    }
};
const getProductShopSubCategory = async (req, res) => {
    const { subcategories } = req.params; // Extract category ID from request parameters
    console.log(`Received request for categoryId: ${subcategories}`); // Log the request parameter

    try {
        const products = await productShopService.getProductShopSubCategory(subcategories); // Call the service to get products
        console.log('Products retrieved:', products); // Log the retrieved products

        // Check if no products were found
        if (products.length === 0) {
            console.log('No products found for category:', subcategories); // Log if no products found
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm cho danh mục này' }); // Send 404 response
        }

        // Send the retrieved products as a response
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err.message); // Log any errors
        res.status(500).json({ error: err.message }); // Send 500 response for server error
    }}


module.exports ={
    getAllProductShopSale,
    getProductShopById,
    getProductShopCategory,
    getProductShopSubCategory,
    getProductShopImages,
    getProductShopType
}