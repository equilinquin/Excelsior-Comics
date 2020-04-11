import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
      <div id="footer" style={{backgroundColor: "#740D1B"}}>
        <Link to="/home" className="footerLink">
        <h5 className="right-align" id="copyright">©2020 Katie Avner, Jared Bucko, Liz, Luke Robinet</h5>
        </Link>
      </div>
    );
  }
  
  export default Footer;
  