const db = require('../config/conectDatabase');

const saveOrder = (orderData) => {
    const sql = 'INSERT INTO orders (user_id, name,phone,email,address, totalPrice, status) VALUES (?, ?, ?, ?, ?,?,?)';
    const values = [
        orderData.user_id,      
        orderData.name, 
        orderData.phone, 
        orderData.email, 
        orderData.address, 
        orderData.totalPrice,    // Total price for the order
        orderData.status         // Status of the order (e.g., "pending", "completed")
    ];

    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error occurred while inserting order:', err); // Log the error
                return reject(err); // Return the error
            }
            resolve({ id: result.insertId, ...orderData }); // Return the ID and order data
        });
    });
};
const saveOrderDetail = (orderdetailData) => {
    const sql = 'INSERT INTO orderdetail (order_id, product_id, quantity,price, amount) VALUES (?,?,?,?,?)';
    const values = [
        orderdetailData.order_id,
        orderdetailData.product_id,
        orderdetailData.quantity,
        orderdetailData.price,
        orderdetailData.amount
    ];
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error occurred while inserting order detail:', err);
                return reject(err);
            }
            resolve({ id: result.insertId, ...orderdetailData });
        });
    });
};
const orderDetail = (userId) => {
    const sql = `
SELECT 
            o.*, od.* -- Chọn tất cả các trường từ bảng order và orderdetail
        FROM 
            \`orders\` o
        INNER JOIN 
            orderdetail od ON o.id = od.order_id
        INNER JOIN 
            users u ON u.id = o.user_id
        WHERE 
            u.id = ?; -- Lọc theo userId  `;
    const values = [userId];
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error occurred while retrieving order detail:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    saveOrder,
    saveOrderDetail,orderDetail
};
