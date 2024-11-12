const postModel = require("../model/postModel");

// Function to save an order
const getPostAll =()=>{
  return postModel.getPostAll(); // Call the saveOrder function from the order model
}
const getPostByMenuItem = (topic_id) => {
  return postModel.getPostByMenuItem(topic_id); // Call the saveOrder function from the order model
};
const getPostDetails = (id)=>{
  return postModel.getPostDetails(id); // Call the saveOrder function from the order model
}
module.exports = {
  getPostByMenuItem,
  getPostAll,
  getPostDetails
};
