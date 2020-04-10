import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Navbar({ handleSearch }) {
  return (
    <nav>
        <div className="nav-wrapper">
        <Link to="/home" className="brand-logo">Excelsior Comics</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link className="navbar-brand" to="/profile">Profile</Link></li>
            <li><Link className="navbar-brand" to="/home">Discover</Link></li>
            <li><Link className="navbar-brand" to="/login">Log Out</Link></li>
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;
