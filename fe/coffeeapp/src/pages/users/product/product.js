import ProductItem from '../../../component/ProductItem';
import'../../../pages/users/product/style.css';

const Product = () => {
  return (
    <div className='product'>
        {/* <ProductItem/>   */}
    
            <div className='first_content'>
                <div className='row'>
            <div className='col-md-6'>

                <div className='text'>
                    <h1>CÀ PHÊ</h1>
                    <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</p>
                    <a href="/product/sp/1" className='btn btn-link'>Khám phá ngay</a>
                </div>
            </div>
            <div className='col-md-6'>
                <img src={require('../../../assets/users/images/product/1.png')}/>
                </div>
               
            </div>
            </div>
            <div  className='second_content'>
            <div className='row'>
            <div className='col-md-6'>

                <div className='text'>
                    <h1>TRÀ</h1>
                    <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</p>
                </div>
            </div>
            <div className='col-md-6'>
                <img src={require('../../../assets/users/images/product/2.png')}/>
                </div>
            </div>
            </div>
            <div  className='thirt_content'>
            <div className='row'>
            <div className='col-md-6'>

                <div className='text'>
                    <h1>KHỎE - ĐẸP</h1>
                    <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</p>
                </div>
            </div>
            <div className='col-md-6'>
                <img src={require('../../../assets/users/images/product/2.png')}/>
                </div>
            </div>
            </div>
            <div  className='four_content'>
            <div className='row'>
            <div className='col-md-6'>

                <div className='text'>
                    <h1>ĐỒ ĂN CHƠI</h1>
                    <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</p>
                </div>
            </div>
            <div className='col-md-6'>
                <img src={require('../../../assets/users/images/product/2.png')}/>
                </div>
            </div>
            </div>
            <div  className='finally_content'>
            <div className='row'>
            <div className='col-md-6'>

                <div className='text'>
                    <h1>ĐỒ UỐNG ĐỊA PHƯƠNG</h1>
                    <p>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</p>
                </div>
            </div>
            <div className='col-md-6'>
                <img src={require('../../../assets/users/images/product/3.png')}/>
                </div>
            </div>
               </div>
      
            </div>
            
  );
};

export default Product;
