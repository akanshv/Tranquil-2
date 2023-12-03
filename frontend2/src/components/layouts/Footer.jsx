import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import play from "../../assets/images/play.jpg";
import app from "../../assets/images/app.jpg";
import pay from "../../assets/images/pay.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="column1">
          <img src={logo} className="logo ml-[6rem]" alt="logo" />
          <h4>Contact Us</h4>
          <p>
            <strong>Address: </strong>IIIT Sri City, Gnan Marg, Tirupati
            District, Andhra Pradesh, India
          </p>
          <p>
            <strong>Phone: </strong>91-7306473364, 91-7337327448{" "}
          </p>
          <p>
            <strong>Hours: </strong>10:00 am - 6:00 pm (Mon-Sat)
          </p>
          <div class="social">
            <h4>Connect with Us</h4>
            <div class="icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>

        <div class="column2">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Tranquil Stories</a>
        </div>

        <div class="column2">
          <h4>Help</h4>
          <a href="#">Payments</a>
          <a href="#">Terms of use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Security</a>
          <a href="#">FAQ</a>
        </div>

        <div className="column2 install">
          <h4>Install Our App</h4>
          <div className="row">
            <a href="#"><img src={play} alt="playstore" /></a>
            <a href="#"><img src={app} alt="appstore" /></a>
          </div>
          <p>Secure Payment Gateways</p>
          <img src={pay} alt="payments" />
        </div>
      </footer>

      <div className="copyright">
        &copy; 2023 Tranquil.com | All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;