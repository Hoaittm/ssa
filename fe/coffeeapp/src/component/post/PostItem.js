import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const PostItem = ()=>{
    const posts =[
        {
          img:require('../../assets/users/images/post/img1.jpg'),
          title: 'CỘNG QUỐC TẾ TUYỂN DỤNG CHUYÊN VIÊN VẬN HÀNH',
          description: 'Cộng Quốc tế tuyển dụng Chuyên viên Vận hành tiếng Anh lưu loát, làm việc tại 94 Đường láng, Đống Đa, Hà Nội'
        },
        {
          img:require('../../assets/users/images/post/2.png'),
          title: 'CỘNG CÀ PHÊ TUYỂN DỤNG QUẢN LÝ CỬA HÀNG',
          description: 'Cộng Quốc tế tuyển dụng Chuyên viên Vận hành tiếng Anh lưu loát, làm việc tại 94 Đường láng, Đống Đa, Hà Nội'
        },
        {
          img:require('../../assets/users/images/post/img1.jpg'),
          title: 'CỘNG QUỐC TẾ TUYỂN DỤNG CHUYÊN VIÊN VẬN HÀNH',
          description: 'Cộng Quốc tế tuyển dụng Chuyên viên Vận hành tiếng Anh lưu loát, làm việc tại 94 Đường láng, Đống Đa, Hà Nội'
        },
        {
          img:require('../../assets/users/images/post/img1.jpg'),
          title: 'CỘNG QUỐC TẾ TUYỂN DỤNG CHUYÊN VIÊN VẬN HÀNH',
          description: 'Cộng Quốc tế tuyển dụng Chuyên viên Vận hành tiếng Anh lưu loát, làm việc tại 94 Đường láng, Đống Đa, Hà Nội'
        },
        {
          img:require('../../assets/users/images/post/img1.jpg'),
          title: 'CỘNG QUỐC TẾ TUYỂN DỤNG CHUYÊN VIÊN VẬN HÀNH',
          description: 'Cộng Quốc tế tuyển dụng Chuyên viên Vận hành tiếng Anh lưu loát, làm việc tại 94 Đường láng, Đống Đa, Hà Nội'
        }, {
          img:require('../../assets/users/images/post/img1.jpg'),
          title: 'CỘNG QUỐC TẾ TUYỂN DỤNG CHUYÊN VIÊN VẬN HÀNH',
          description: 'Cộng Quốc tế tuyển dụng Chuyên viên Vận hành tiếng Anh lưu loát, làm việc tại 94 Đường láng, Đống Đa, Hà Nội'
        },
    
      ]
      const [visitPost,setvisitPost]= useState(3);
      const handleShowMore = () => {
        setvisitPost(posts.lenght); // Cần trả về giá trị mới, chứ không phải chỉ viết biểu thức.
      };
      return (
        
        <div className='post'>
         <div className="container">
      <div className="row">
        <div className="col-md-9 order-md-1">
          {posts.slice(0,visitPost).map((post, index) => (
            <div className="row" key={index}>
              <div className="col-md-3">
                <img className="img-hover"  src={post.img} alt="post" />
              </div>
              <div className="col-md-6">
                <h5>{post.title}</h5>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="col-md-3 order-md-2">
          <div className="box">
            <h3>ĐĂNG KÝ THEO DÕI</h3>
            <img src={require('../../assets/users/images/header/logo.png')} alt="logo"/>
            <p>Nhận những thông báo mới nhất về Cộng Cà Phê.</p>
            <form className='inputF'>
              <input className = 'email ' type="text" placeholder="Nhập địa chỉ email" />
              <button className = 'email ' type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
        {visitPost<posts.length &&(
      <div className="col-md-12 order-md-3">
      <button className="btn-xem-them"onClick={handleShowMore}>Xem thêm</button>
    </div>
        )}
      
      </div>
    </div>
    
        </div>

      );
}
export default PostItem;