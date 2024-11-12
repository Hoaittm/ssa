const orderService = require('../service/orderService');
const sendMail = require('../helpers/sendMail'); // Import hàm gửi mail

// Controller to handle saving an order
const saveOrder = async (req, res) => {
    try {
        const orderData = req.body; // Get order data from request body
        const savedOrder = await orderService.saveOrder(orderData);
        const username = savedOrder.name;
        const totalPrice = savedOrder.totalPrice;
        const phone = savedOrder.phone;
        const email = savedOrder.email;
        const address = savedOrder.address;

        await sendMail({
            email: savedOrder.email, // Email người nhận từ dữ liệu đơn hàng
            subject: 'Đặt hàng thành công',
            html: `
               <div style="font-family: Arial, sans-serif; padding: 0; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        
        <h1 style="color: #333; text-align: center; font-size: 24px; margin-bottom: 20px;">Cộng Cà Phê</h1>
        <p style="font-size: 16px; color: #555; margin-bottom: 15px;">Xin chào <strong>${username}</strong>,</p>
        <p style="font-size: 16px; color: #555; margin-bottom: 15px;">Cảm ơn bạn đã lựa chọn mua hàng tại Cộng Cà Phê.</p>
        <p style="font-size: 16px; color: #555; margin-bottom: 15px;">Chúng tôi rất vui thông báo rằng đơn hàng của bạn với tổng số tiền là <strong>${totalPrice} VNĐ</strong> đã được đặt thành công và đang trong quá trình xử lý.</p>
        
        <h3 style="color: #333; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">Thông tin chi tiết đơn hàng</h3>
        <p style="font-size: 16px; color: #555; margin-bottom: 8px;">Số điện thoại: <strong>${phone}</strong></p>
        <p style="font-size: 16px; color: #555; margin-bottom: 8px;">Email: <strong>${email}</strong></p>
        <p style="font-size: 16px; color: #555; margin-bottom: 20px;">Địa chỉ giao hàng: <strong>${address}</strong></p>
        
        <div style="text-align: center;">
            <a href="http://localhost:3000/user-detail" target="_blank" style="
                display: inline-block;
                padding: 12px 24px;
                font-size: 16px;
                color: #fff;
                background-color: #4CAF50;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 20px;
            ">
                Xem chi tiết đơn hàng
            </a>
        </div>
        
        <p style="font-size: 14px; color: #777; margin-top: 30px; line-height: 1.6;">
            Nếu bạn có bất kỳ câu hỏi nào về đơn hàng, xin vui lòng liên hệ với chúng tôi qua email hoặc hotline của Cộng Cà Phê. 
            Chúng tôi luôn sẵn sàng hỗ trợ bạn.
        </p>
        
        <p style="font-size: 14px; color: #777; margin-top: 10px; line-height: 1.6;">
            Cảm ơn bạn đã tin tưởng và ủng hộ Cộng Cà Phê. Chúc bạn một ngày tốt lành!
        </p>
    </div>
</div>

            `
        });

 // Call service to save order
        res.status(201).json({ message: 'Order saved successfully', order: savedOrder }); // Send success response
    } catch (err) {
        console.error('Error while saving order:', err); // Log the error
        res.status(500).json({ error: err.message }); // Send error response
    }
};
const saveOrderDetail = async (req, res) => {
    try {
        const orderdetailData = req.body; // Get order detail data from request body
        const savedOrderDetail = await orderService.saveOrderDetail(orderdetailData);
        res.status(201).json({ message: 'Order detail saved successfully', orderdetail: savedOrderDetail });
    } catch (err) {
        console.error('Error while saving order detail:', err);
        res.status(500).json({ error: err.message });
    }
};
const orderDetail = async (req, res) => {
    try {
        console.log('Tham số yêu cầucc:', req.params); // Ghi log tham số yêu cầu
        const userId = req.params.userId;

        if (!userId) {
            return res.status(400).json({ message: 'ID người dùng là bắt buộc.' });
        }

        const orders = await orderService.orderdetail(userId);
        if (orders.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy đơn hàng cho người dùng này.' });
        }
        res.json(orders);
    } catch (error) {
        console.error('Lỗi khi lấy chi tiết đơn hàng:', error);
        res.status(500).json({ message: 'Lỗi máy chủ nội bộ.' });
    }
}

module.exports = {
    saveOrder,
    saveOrderDetail,
    orderDetail
};
