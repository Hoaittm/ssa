import { faFacebook,faTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../footer/style.css';
const Footer = () => {
    return (
      <div className="footer">
       <div className="listSocial">
        <div className="col-md-12">
            <div className='row'>
            <div className="col-md-6">
                <h3>KÊNH KẾT NỐI</h3>
                <div className="socialLeft">
                    <div className="listSocial_C">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
               <a href="http://online.gov.vn/Home/WebDetails/74952">
               <img src={require('../../../../assets/users/images/header/img5.png')}/></a>
                </div>

            </div>
            <div className = "col-md-6">
                <h3>LUÔN CẬP NHẬT</h3>
                <div className="socialRight">
                    <p>Về các tin tức đó đây, sản phẩm mới</p>
                    <from action ="#">
                        <input className="txt1"type='text' id='email'name='email' label='Email'/> 
                        <input className = 'txt2'type='submit' value='ĐĂNG KÝ'/>
                    </from>
                    <p style={{ color: '#babcba' ,fontWeight:'bold'}}>Chúng tôi tôn trọng quyền riêng tư của bạn</p>
                </div>
    
            </div></div>
        </div>
       </div>
       <div className='footer_bottom'>
        <p>Công ty TNHH Cộng Cà Phê</p>
        <p>Mã số DN: 0106696845 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 21/11/2014</p>
        <p>Địa chỉ: Số 101 Hoàng Cầu, phường Ô Chợ Dừa, quận Đống Đa, Hà Nội - Số điện thoại: +84 243 733 9966 - Email: info@congcaphe.com</p>
        <p>©2017 - 2024 CÔNG TY TNHH Cộng CàPhê Mọi quyền được bảo lưu</p>
       </div>
      </div>
    );
  };
  
  export default Footer;
  