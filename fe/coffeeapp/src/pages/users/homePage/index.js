import React from "react";
import '../../../pages/users/homePage/style.css';
import banner from "../../../assets/users/images/header/banner.jpg";
import image1 from '../../../assets/users/images/header/1.png';
import image2 from '../../../assets/users/images/header/2.png';
import image3 from '../../../assets/users/images/header/3.png';
import image4 from '../../../assets/users/images/header/4.png';
import Carousel from "../../../component/Carousel";
const HomePage = () =>{
    const items = [
        {
            title: 'Cốt Dừa Cà Phê',
            price: 'Chỉ 55,000 Đ',
            description: 'Được lấy cảm hứng từ “Kem Tràng Tiền” – hương vị mà bất cứ người Hà Nội nào cũng nhớ, Sinh Tố Cộng Đổi Mới với phần cốt dừa đặc trưng là thức uống ngon nổi trội và được yêu thích nhất tại Cộng.',
            image: image1,
            bgColor: '#9c4d2f'
        },
        {
            title: 'Cốt Dừa Cốm Xanh',
            price: 'Chỉ 65,000 Đ',
            description: 'Vị ngọt dịu và hương thơm nhẹ nhàng của những hạt cốm non - thứ quà tinh hoa từ thủ đô Hà Nội quyện lẫn với cốt dừa, tạo nên thứ đồ uống lạ miệng mà vẫn thanh tao.',
            image: image2,
            bgColor: '#f6f8ea'
        },
        {
            title: 'Cốt Dừa Đậu Xanh',
            price: 'Chỉ 65,000 Đ',
            description: 'Bánh Đậu xanh - thức quà thân thuộc của tuổi thơ nay được "đổi mới" trong thức uống cốt dừa đặc trưng của Cộng Cà Phê.',
            image: image3,
            bgColor: '#e9e0bf'
        },
        {
            title: 'Cốt Dừa Cacao',
            price: 'Chỉ 65,000 Đ',
            description: 'Cốt dừa béo ngậy, ngọt ngào hòa quyện cùng vị đắng thơm của cacao tạo ra thức uống vô cùng thơm ngon và dễ gây "nghiện".',
            image: image4,
            bgColor: '#d89875'
        }
    ];
    return (
        <div>
  <section className="carousel">
           
           <Carousel items={items} />
       </section>
      
        <div className="container">
         <div className="col-md-12">
           <div className="banner banner1">
            <a href="">
                <img src={banner}></img>
            </a>
            <a>
                <span>CÂU CHUYỆN CỘNG</span>
            </a>
           </div>
        </div>
        <div className="section">
    <div className="row">
        <div className="col-md-6">
            <div className="banner2 ">
                <a href="#">
                    <img src={require('../../../assets/users/images/header/img1.jpg')} alt="Pha chế" />
                    <span>PHA CHẾ</span>
                </a>
            </div>
        </div>
        <div className="col-md-6">
            <div className="banner2">
                <a href="#">
                    <img src={require('../../../assets/users/images/header/img2.jpg')} alt="Pha chế" />
                    <span>THỰC ĐƠN</span>
                </a>
            </div>
        </div>
    </div>
</div>
<div className="section">
    <div className="col-md-12">
        <div className="banner3">
        <a>
            <img src={require("../../../assets/users/images/header/img3.jpg")}/>

        </a>
        <div className="txtLeft">
<div className="lineHeight">
    <h3>TIN TỨC NỔI BẬT</h3>
    <p>"Lao động hay say,tình hay sẽ đến "</p>
    <p>Cộng chúc bạn một ngày mới thật nhiều năng lượng để hoàn thành công việc thật tốt !?</p>
</div>
</div>
        </div>
    </div>
</div>
<div className="section">
    <div className="col-md-12">
        <div className="banner3">
        <a>
            <img src={require("../../../assets/users/images/header/img4.jpg")} />
                   </a>
                   <div className="txtLeft1">
<div className="lineHeight">
    <h3>TUYỂN DỤNG</h3>
    <p>Gia nhập gia đình Cộng ngay hôm nay .</p>
    <p>Đọc thông tin để biết thêm chi tiết .</p>
    <p>Cộng nhiệt liệt chào mừng .</p>
</div>
</div>
        </div>
    </div>
</div>
<div className="section">
    <div className="row col-12">
        <div className="col-6 col-sm-3">
            <div className="column">
            <h3>Tin tức</h3>
            <ul className="list">
                <li><a href="#">Về chúng tôi</a></li>
               
            </ul>
            </div>
        </div>
        <div className="col-6 col-sm-3">
            <div className="column">
            <h3>Cửa hàng</h3>
            <ul className="list">
                <li><a href="#">Danh sách cửa hàng</a></li>
               
            </ul>
            </div>
        </div>
        <div className="col-6 col-sm-3">
            <div className="column">
            <h3>Đồ uống</h3>
            <ul className="list">
                <li><a href="#">Hôm nay cộng có</a></li>
               
            </ul>
            </div>
        </div>
        <div className="col-6 col-sm-3">
            <div className="column">
            <h3>Chính sách</h3>
            <ul className="list">
                <li><a href="#">Chính sách bảo mật</a></li>
                <li><a href="#">Điều khoản sử d</a></li>
            </ul>
            </div>
        </div>
    </div>
</div>  </div>
        </div>
       
    )
}
export default HomePage;