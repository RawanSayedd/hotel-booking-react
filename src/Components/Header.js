import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
  return (
    <div>
      <header>
        <div className="container flexSB">
          <div className="logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="container2 flexSB">
            <div className="contact flexSB">
              <div className="box flexSB">
                <div className="icons">
                  <i className="fa fa-clock"></i>
                </div>
                <div className="text">
                  <h4>Working Hours</h4>
                  <Link to="/contact">Monday - Sunday: 9:00AM to 6:00PM</Link>
                </div>
              </div>
            </div>
            <div className="contact flexSB">
              <div className="box flexSB">
                <div className="icons">
                  <i className="fa fa-phone-volume"></i>
                </div>
                <div className="text">
                  <h4>Call Us</h4>
                  <Link to="/contact">+0111234567</Link>
                </div>
              </div>
            </div>
            <div className="contact flexSB">
              <div className="box flexSB">
                <div className="icons">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="text">
                  <h4>Mail Us</h4>
                  <Link to="/contact">info@example.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
