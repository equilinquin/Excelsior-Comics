import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
      <div className="row valign-wrapper" id="footer" style={{backgroundColor: "#740D1B"}}>     
        <h5 className="center-align" id="copyright"><Link to="/home" className="footerLink">©2020 Caitlin Avner, Jared Bucko, Elizabeth Garcia-Quilinquin, Luke Robinett</Link></h5>
      </div>
    );
  }
  
  export default Footer;
  