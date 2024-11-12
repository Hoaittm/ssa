const searchService = require("../service/searchService");

// Controller để xử lý tìm kiếm sản phẩm theo menu item
const searchProduct = async (req, res) => {
    try {
        // Lấy từ khóa tìm kiếm từ query string
        const searchQuery = req.query.q;

        // Kiểm tra nếu từ khóa tìm kiếm không tồn tại
        if (!searchQuery) {
            return res.status(400).json({ message: "Search query is missing" });
        }

        // Gọi service để thực hiện tìm kiếm
        const results = await searchService.searchProduct(searchQuery);

        // Trả kết quả tìm kiếm về cho client
        res.json(results);
    } catch (error) {
        console.error('Error while searching for products:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
  searchProduct,
};
