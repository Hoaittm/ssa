const searchModel = require("../model/searchModel");

// Function to save an order
const searchProduct = (searchQuery) => {
  return searchModel.searchProduct(searchQuery); // Call the saveOrder function from the order model
};

module.exports = {
    searchProduct,
};
