

const Productitem =()=>{

return (
    <div className="container">
    <div className="row">
      {/* Sidebar Menu */}
      <div className="col-md-3">
        <div className="productList">
          <h3>THỰC ĐƠN CỘNG </h3>
          <ul>
            <li><a href="">Sản phẩm 1</a></li>
            <li><a href="">Sản phẩm 2</a></li>
            <li><a href="">Sản phẩm 3</a></li>
            <li><a href="">Sản phẩm 4</a></li>
            <li><a href="">Sản phẩm 5</a></li>
          </ul>
        </div>
      </div>

      {/* Product List */}
      <div className="col-md-9">
        <div className="productList">
          <h3>ĐẶC SẢN TẠI CỘNG</h3>
          <div className="row">
            {/* Product Card 1 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" title='CỐT DỪA CÀ PHÊ  ' />
                  <p>CỐT DỪA CÀ PHÊ</p>
                  <p>55.000đ</p>
                </div>
              </a>
            </div>

            {/* Product Card 2 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                  <p>CỐT DỪA CÀ PHÊ</p>
                  <p>55.000đ</p>
                </div>
              </a>
            </div>

            {/* Product Card 3 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                  <p>CỐT DỪA CÀ PHÊ</p>
                  <p>55.000đ</p>
                </div>
              </a>
            </div>

            {/* Product Card 4 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
                  <p>CỐT DỪA CÀ PHÊ</p>
                  <p>55.000đ</p>
                </div>
              </a>
            </div>

            {/* Product Card 5 */}
            <div className="col-md-3">
              <a href="">
                <div className="card">
                  <img src={require('../assets/users/images/header/1.png')} alt="CỐT DỪA CÀ PHÊ" />
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
)
}
export default Productitem;