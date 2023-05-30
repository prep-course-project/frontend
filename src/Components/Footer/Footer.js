
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
return(
<footer className="footer">
  <div className="big-container">
    <div class="logo"></div>
    <div className='foot-tx'>
    <h1 >We Provide the best propery for you </h1>
    <p className="FooterParagraph">Ral Estate is considered to be on of the most valuble and important assetsthat people can own .</p>
    </div>
  </div>
  {/* <div className="container">
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
  </div> */}

  <div className="footer-cont">

    <div className="contact-cont">
  
        <div className="con-1">
          <i class="fa-solid fa-house"></i>
          <h4>Real Estate</h4>   
          <p>Real Estate refers to the buying ,selling, and renting of house, building, and other properties</p>   
        </div>

        <div className="con-2">
          <h4>Quick Links</h4>
          <Link className='nav-link footer-link' to='/'>Home</Link>
          <Link className='nav-link footer-link' to='/PropertyList'>PropertyList</Link>
          <Link className='nav-link footer-link' to='/Favorite'>Favorite</Link>
          <Link className='nav-link footer-link' to='/About'>About</Link>
        </div>

        <div className="con-3">
          <h4>Services</h4>
          <Link className='nav-link footer-link' to='/'>Contact Support</Link>
          <Link className='nav-link footer-link' to='/'>Help Center</Link>
          <Link className='nav-link footer-link' to='/'>Privacy Policy</Link>
          <Link className='nav-link footer-link' to='/'>Team</Link>
        </div>

        <div className="con-4">
          <h4>Contact</h4>
          <Link className='nav-link footer-link' to='/'>Adress : Amman, Jordan</Link>
          <Link className='nav-link footer-link' to='/'>Phone : +962 777 888 202</Link>
          <Link className='nav-link footer-link' to='/'>Email : real-estate@ltuc.com</Link>
        </div>
    </div>
    <div className='hr'></div>
    <div className="copy-right">
      <div>
      <i class="fa-regular fa-copyright"></i>
      </div>
      <p>All Right Reserved By, Elite Sands 2023</p>
    </div>
    </div> 
</footer>



)

};

export default Footer;
