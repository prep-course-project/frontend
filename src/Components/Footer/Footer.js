
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#a29f9f", height: "200px", paddingTop: "20px" }}>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="custom-div" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h3>Contact Us</h3>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="custom-div" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h3>real estate</h3>
            <p>&copy; 2023 real estate. All rights reserved.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="custom-div" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h3>Social media Links</h3>
            <p>Social media Links</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
