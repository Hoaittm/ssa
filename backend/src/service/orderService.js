const orderModel = require('../model/orderModel');

// Function to save an order
const saveOrder = async (orderData) => {
    return await orderModel.saveOrder(orderData); // Call the saveOrder function from the order model
};
const saveOrderDetail = async(orderdetailData)=>{
    return await orderModel.saveOrderDetail(orderdetailData);
}
const orderdetail = async(userId)=>{
    return await orderModel.orderDetail(userId);
}
module.exports = {
    saveOrder,
    saveOrderDetail,
    orderdetail
};
