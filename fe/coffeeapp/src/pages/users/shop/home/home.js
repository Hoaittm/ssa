

const HomeShop = ()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                   
                    <h1>Danh mục</h1>
                    <ul>
                        <li className="dropdown">
                            <a className='dropbtn' href="/shop/product">Bộ sưu tập</a>
                            <div className="dropdown-content">
                                <a href="/shop/product">Bình giữ nhiệt - Ca meo</a>
                                <a href="">Board Game</a>
                                <a href="">Trung thu 2024</a>
                            </div>
                        </li>
                        <li className="dropdown">
                        <a className='dropbtn' href="">Cà Phê</a>
                        <div className="dropdown-content">
                            <a href="">Cà Phê Xã Hội Chủ Nghĩa Việt Nam</a>
                            <a href="">Cà Phê Bột</a>
                            <a href="">Cà Phê Hòa Tan</a>
                        </div>
                        </li>
                        <li className="dropdown">
                        <a className='dropbtn' href="">Trà Cổ Thụ</a>
                        
                        </li>
                        <li className="dropdown">
                        <a className='dropbtn' href="">Đồ Vải</a>
                        <div className="dropdown-content">
                            <a href="">Túi Vải</a>
                            <a href="">Áo </a>
                            <a href="">Quần</a>
                            <a href="">Giày Dép</a>
                            <a href="">Sản phẩm khác</a>
                        </div>
                        </li>
                        <li className="dropdown">
                        <a className='dropbtn' href="">Đồ Giấy</a>
                    
                        
                        </li>
                        <li className="dropdown">
                        <a className='dropbtn' href="">Đồ Da</a>
                        
                        </li>
                        <li className="dropdown">
                        <a className='dropbtn' href="">Đồ Sứ</a>
                    
                        </li>

                    </ul>
                   
                    </div>
                <div className="col-md-9">
                            <h1>Sản phẩm bán chạy</h1>
                            <div className="productList">
                
                <div className="row">
                    {/* Product Card 1 */}
                    <div className="col-md-3">
                    <a href="">
                        <div className="card">
                        <img src={require('../../../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" title='CỐT DỪA CÀ PHÊ  ' />
                        <p>CỐT DỪA CÀ PHÊ</p>
                        <p>55.000đ</p>
                        </div>
                    </a>
                    </div>

                    {/* Product Card 2 */}
                    <div className="col-md-3">
                    <a href="">
                        <div className="card">
                        <img src={require('../../../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                        <p>CỐT DỪA CÀ PHÊ</p>
                        <p>55.000đ</p>
                        </div>
                    </a>
                    </div>

                    {/* Product Card 3 */}
                    <div className="col-md-3">
                    <a href="">
                        <div className="card">
                        <img src={require('../../../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                        <p>CỐT DỪA CÀ PHÊ</p>
                        <p>55.000đ</p>
                        </div>
                    </a>
                    </div>

                    {/* Product Card 4 */}
                    <div className="col-md-3">
                    <a href="">
                        <div className="card">
                        <img src={require('../../../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                        <p>CỐT DỪA CÀ PHÊ</p>
                        <p>55.000đ</p>
                        </div>
                    </a>
                    </div>

                    {/* Product Card 5 */}
                    <div className="col-md-3">
                    <a href="">
                        <div className="card">
                        <img src={require('../../../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                        <p>CỐT DỪA CÀ PHÊ</p>
                        <p>55.000đ</p>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
                </div>
            </div>

        </div>
                </>
            )
        }
        export default HomeShop;