const Contact = ()=>{
    return (
<div>
    <h1>Franchising with Cong Caphe</h1>
    <img src={require('../../../assets/users/images/strore/img1.jpg')}></img>
    <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
<h1>THE CONG CAPHE FAMILY</h1>
        </div>
        <div className='col-md-6'>
        <p>Started the first franchise store beyond Vietnam in Korea in 2018, then in Malaysia and Canada, Cộng Cà phê has completed an efficient training and support system to help its Master Franchisees run smooth and effective business.</p>
</div>
        <div className='col-md-6'>
        <img src={require('../../../assets/users/images/strore/2.png')}/>
        </div>
        <div className='col-md-6'style={{ backgroundColor:'#4d5b2a' }}>
          <div className='text_contact'>
            <h1 style={{ color:'#fff' }}>ARE YOU THE RIGHT FIT?</h1>
        <ul className='text_contact'>
        <li>You have passion for customer experience in distinct emotional memories of Vietnam.</li>
        <li>You are dedicated to high standards & attention to details.</li>
        <li>You have F&B experience and hands-on approach to your business.</li>
        <li>You have a strong financial capability to grow Cộng Cà phê in your country and support your sub-franchisees in the long run.</li>
        </ul>  
        </div>
        </div>
        <div className='col-md-6'style={{ backgroundColor:'#4d5b2a' }}>
          <div className='text_contact'>
            <h1 style={{ color:'#fff' }}>WHAT YOU WILL GET:</h1>
        <ul className='text_contact'>
        <li>Our proven system for operating your franchise business.</li>
        <li>Dedicated service and support.</li>
        <li>Training programs for you and your employees
        </li>
        
        </ul>  
        </div>
        </div>
        <div className='col-md-6'>
        <img src={require('../../../assets/users/images/strore/3.jpg')}/>
        </div>
       
        </div>
        <p>PLEASE FILL OUT THE FORM IN THE LINK BELOW</p>
        <p>
        <a href='#'>APPLICATION FORM FOR FRANCHISING OUTSIDE OF VIETNAM</a>
        </p>
        
        <p>FOR ANY OTHER INQUIRIES, PLEASE CONTACT US AT: international@congcaphe.com</p>
    </div>
</div>
    );
}
export default Contact;