import React from "react";
import './style.css';
import logo from "../../../../assets/users/images/header/logo.png";
import Carousel from "../../../../component/Carousel";
// import image1 from '../../../../assets/users/images/header/1.png';
// import image2 from '../../../../assets/users/images/header/2.png';
// import image3 from '../../../../assets/users/images/header/3.png';
// import image4 from '../../../../assets/users/images/header/4.png';
import Menu from "../../../../component/Menu";

const Header = () => {
    // const items = [
    //     {
    //         title: 'Cốt Dừa Cà Phê',
    //         price: 'Chỉ 55,000 Đ',
    //         description: 'Được lấy cảm hứng từ “Kem Tràng Tiền” – hương vị mà bất cứ người Hà Nội nào cũng nhớ, Sinh Tố Cộng Đổi Mới với phần cốt dừa đặc trưng là thức uống ngon nổi trội và được yêu thích nhất tại Cộng.',
    //         image: image1,
    //         bgColor: '#9c4d2f'
    //     },
    //     {
    //         title: 'Cốt Dừa Cốm Xanh',
    //         price: 'Chỉ 65,000 Đ',
    //         description: 'Vị ngọt dịu và hương thơm nhẹ nhàng của những hạt cốm non - thứ quà tinh hoa từ thủ đô Hà Nội quyện lẫn với cốt dừa, tạo nên thứ đồ uống lạ miệng mà vẫn thanh tao.',
    //         image: image2,
    //         bgColor: '#f6f8ea'
    //     },
    //     {
    //         title: 'Cốt Dừa Đậu Xanh',
    //         price: 'Chỉ 65,000 Đ',
    //         description: 'Bánh Đậu xanh - thức quà thân thuộc của tuổi thơ nay được "đổi mới" trong thức uống cốt dừa đặc trưng của Cộng Cà Phê.',
    //         image: image3,
    //         bgColor: '#e9e0bf'
    //     },
    //     {
    //         title: 'Cốt Dừa Cacao',
    //         price: 'Chỉ 65,000 Đ',
    //         description: 'Cốt dừa béo ngậy, ngọt ngào hòa quyện cùng vị đắng thơm của cacao tạo ra thức uống vô cùng thơm ngon và dễ gây "nghiện".',
    //         image: image4,
    //         bgColor: '#d89875'
    //     }
    // ];
    return (
        <div>
<Menu/>
{/*        
      <header>
        <a href="/"><figure className="logo">
        <img src={logo} alt="Logo"/>
        </figure></a>
        
        <nav className="main-nav">
            <ul>
                <li><a href='/story'>CÂU CHUYỆN</a></li>
                <li><a href="">BẢNG TIN</a></li>
                <li><a href="">THỰC ĐƠN</a></li>
                <li><a href="">QUẦY MẬU DỊCH</a></li>
                <li><a href="">CỬA HÀNG</a></li>
                <li><a href="">LIÊN HỆ</a></li>
            </ul>
        </nav>
     
      </header>
      <main>
        <section className="carousel">
           
            <Carousel items={items} />
        </section>
      </main> */}
      </div>
    )
}
export default Header;

