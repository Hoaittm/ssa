const express = require("express");
const userController = require("../controller/userController");

const menuController = require("../controller/menuController");
const listCategoryController = require("../controller/listCategoryController");
const productController = require("../controller/productController");
const categoriesShopController = require("../controller/categoryShopController");
const productShopController = require("../controller/productShopController");
const ordersController = require("../controller/orderController");
const postController = require("../controller/postController");
const searchController = require("../controller/searchController");
const passport = require('passport');
require('dotenv').config();
const router = express.Router();
// Login
router.post("/register", userController.registerUser);
router.get("/profile/:id", userController.getProfileById);

router.post("/login", userController.loginUser);
// Đăng nhập với Google (không cần session)
router.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'], session: false })
);

// Callback route for Google after authentication
router.get('/api/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
      if (req.user) {
          res.redirect(`http://localhost:3000/login-success/${req.user.id}`);
      } else {
          res.redirect('http://localhost:3000/login-failure');
      }
  }
);

// Fetch user data by ID
router.post('/api/users', userController.googleLogin);
router.post('/api/facebook', userController.facebookLogin);
router.put('/update-address/:userId', userController.updateUser);

// Menu routes
router.get("/menus", menuController.getAllMenus); // Lấy danh sách menu
router.get("/menus/:id", menuController.getMenuById); // Lấy menu theo ID
router.post("/menus", menuController.createMenu); // Tạo menu mới
router.put("/menus/:id", menuController.updateMenu); // Cập nhật menu theo ID
router.delete("/menus/:id", menuController.deleteMenu); // Xóa menu theo ID

router.get("/categories", listCategoryController.getAllCategories);
router.get("/categories/:id", listCategoryController.getCategoriesById); // Get category by ID

router.post("/categories", listCategoryController.createCategories); // Tạo menu mới
router.put("/categories/:id", listCategoryController.updateCategories); // Cập nhật menu theo ID
router.delete("/categories/:id", listCategoryController.deleteCategories); // Xóa menu theo ID

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.get("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.get(
  "/products/category/:category_id",
  productController.getProductCategory
);

///shop
router.get("/shop", categoriesShopController.getAllCategoriesShop);
router.get(
  "/shopcategories/:id",
  categoriesShopController.getCategoriesShopById
);
router.get(
  "/shopcategories/parentId/:categoryshop_id",
  categoriesShopController.getCategoriesShopParentId
);

//shopproduct
router.get("/shopsale", productShopController.getAllProductShopSale);
router.get("/productshop/:id", productShopController.getProductShopById);
router.get(
  "/productshop/category/:categoryshop_id",
  productShopController.getProductShopCategory
);
router.get(
  "/productshop/subcategory/:subcategories",
  productShopController.getProductShopSubCategory
);
router.get(
  "/productshop/details/:product_id",
  productShopController.getProductShopImages
);
router.get(
  "/productshop/detailstype/:type_id",
  productShopController.getProductShopType
);

//order
router.post("/orders", ordersController.saveOrder);
router.post("/orderDetails", ordersController.saveOrderDetail);
router.get("/details/:userId", ordersController.orderDetail);
//post
router.get("/posts",postController.getPostAll);
// router.get("/posts/:topic_id", postController.getPostByMenuItem);
router.get("/posts/:id",postController.getPostDetails);
//search
router.get("/search", searchController.searchProduct);
module.exports = router;
