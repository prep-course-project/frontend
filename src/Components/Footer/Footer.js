
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {

return(
<footer className="footer">
  <div className="big-container">
  <div class="logo"></div>

    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
  <p className="FooterParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lobortis nibh. Integer .</p>
 
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="custom-div text-center">
          <h3>Contact Us</h3>
          
      <Nav className="phone">
      <Nav.Link href="https://www.phone.com">
      <div className="pNumb">

<p><i class="fa-solid fa-phone"></i>+962 857389291</p>
</div>
      </Nav.Link>
      </Nav>
      
    
      
    </div>
      </div>
      <div className="col-sm-4">
        <div className="custom-div text-center">
          <h3>Real estate</h3>
          
          <p className="coppy">&copy; 2023 Real estate. All rights reserved.</p>

        </div>
      </div>
      <div className="col-sm-4">
        <div className="custom-div text-center">
          <h3>Social Media Links</h3>
        <p className='pSocial'>Follow Us</p>
      <Nav className="icons">
      <Nav.Link href="https://www.twitter.com">
        <i class="fa-brands fa-twitter"></i>
            </Nav.Link>
      <Nav.Link href="https://www.facebook.com">
      <i class="fa-brands fa-facebook"></i>
      </Nav.Link>
      
      <Nav.Link href="https://www.instagram.com">
      <i class="fa-brands fa-instagram"></i>    
        </Nav.Link>
   
      </Nav> 
        </div>
      </div>
    </div>
  </div>
  
</footer>



)

};

export default Footer;
