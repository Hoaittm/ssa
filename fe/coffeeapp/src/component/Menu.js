// Menu.js
import React from 'react';
import logo from "../assets/users/images/header/logo.png";
import '../pages/users/theme/header/style.css';

const Menu = () => {
  return (
    <header>
      <a href="/"><figure className="logo">
        <img src={logo} alt="Logo"/>
      </figure></a>
      
      <nav className="main-nav">
        <ul >
          <li><a href='/story'>CÂU CHUYỆN</a></li>
          <li className='dropdown'>
            <a className ="dropbtn" href="/post">BẢNG TIN</a>
              <div className='dropdown-content'>
              <a href="#">Chính sách KHTV</a>
                    <a href="/post">Tin Tức</a>
                    <a href="/post/cooperate">Hợp Tác</a>
                    <a href="/post/around">Đó Đây</a>
                    <a href="/post/bartending">Pha Chế</a>
              </div>
          </li>
          <li><a href="/product">THỰC ĐƠN</a></li>
          <li className='dropdown'>
            <a className ="dropbtn" href="">QUẦY MẬU DỊCH</a>
            <div className='dropdown-content'>
            <a href="/shop ">Quầy mậu dịch</a>
              </div></li>
          <li><a href="/store">CỬA HÀNG</a></li>
          <li className='dropdown'>
            <a className ="dropbtn" href="/contact">LIÊN HỆ</a>
            <div className='dropdown-content'>
            <a href="/post">Tuyển dụng</a>
            <a href="#">Cộng Lắng Nghe</a>
            <a href="#">Về Chúng tôi</a>
              </div></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
