const ProductListShop = ()=>{
    return (
        <div>
        <div className="header_shop">
            <div className="container">
                <p>Trang chủ / Danh mục/Bình giữ nhiệt -Ca meo</p>
            </div>
        </div>
        <div className="header_img">
            <img src={require('../../assets/users/images/shop/img1.webp')}></img>
        </div>
        <div className='product_list'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h5>GIÁ SẢN PHẨM</h5>
                        <p><input type='checkbox'/>Dưới 500.000đ</p>
                        <p><input type='checkbox'/>500.000đ - 1.000.000đ</p>
                        <p><input type='checkbox'/>1.000.000đ - 1.500.000đ</p>
                        <p><input type='checkbox'/>2.000.000đ - 5.000.000đ</p>
                        <p><input type='checkbox'/>Trên 5.000.000đ</p>
                    </div>
                    <div className="col-md-9">
        <div className="productList">
          <h3>ĐẶC SẢN TẠI CỘNG</h3>
          <div className="row">
            {/* Product Card 1 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" title='CỐT DỪA CÀ PHÊ  ' />
                  <p>CỐT DỪA CÀ PHÊ</p>
                  <p>55.000đ</p>
                </div>
              </a>
            </div>

            {/* Product Card 2 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                  <p>CỐT DỪA CÀ PHÊ</p>
                  <p>55.000đ</p>
                </div>
              </a>
            </div>

            {/* Product Card 3 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                  <p>CỐT DỪA CÀ PHÊ</p>
                  <p>55.000đ</p>
                </div>
              </a>
            </div>

            {/* Product Card 4 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                  <p>CỐT DỪA CÀ PHÊ</p>
                  <p>55.000đ</p>
                </div>
              </a>
            </div>

            {/* Product Card 5 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
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
        </div>
        </div>
    )
}
export default ProductListShop;