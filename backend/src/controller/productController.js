const productService = require('../service/productService.js');

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getProductCategory = async (req, res) => {
    const { category_id } = req.params;
    console.log(`Received request for categoryId: ${category_id}`); // Log the request parameter

    try {
    const products = await productService.getProductCategory(category_id);
    console.log('Products retrieved:', products); // Log the retrieved products
    if (products.length === 0) {
        console.log('No products found for category:', categoryId); // Log if no products
        return res.status(404).json({ message: 'Không tìm thấy sản phẩm cho danh mục này' });
    }
    res.json(products);
    } catch (err) {
    console.error('Error fetching products:', err.message); // Log any errors
    res.status(500).json({ error: err.message });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productService.getProductById(id);
        res.json(product);
    } catch (err) {
        res.status(err.message === 'Product not found' ? 404 : 500).json({ error: err.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await productService.updateProduct(id, req.body);
        res.json(updatedProduct);
    } catch (err) {
        res.status(err.message === 'Product not found' ? 404 : 500).json({ error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await productService.deleteProduct(id);
        res.json(result);
    } catch (err) {
        res.status(err.message === 'Product not found' ? 404 : 500).json({ error: err.message });
    }
};

module.exports = {
    getAllProducts,
    getProductCategory,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
};
