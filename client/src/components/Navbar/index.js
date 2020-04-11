import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar({ handleSearch }) {
  return (
    <div>

      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo" id="app-logo"><Link to="/home">Excelsior Comics</Link></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link className="navbar-brand navLink" to="/profile">Profile</Link></li>
            <li><Link className="navbar-brand navLink" to="/home">Discover</Link></li>
            <li><Link className="navbar-brand navLink" to="/login">Log Out</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><Link className="navbar-brand" to="/profile">Profile</Link></li>
        <li><Link className="navbar-brand" to="/home">Discover</Link></li>
        <li><Link className="navbar-brand" to="/login">Log Out</Link></li>
      </ul>

    </div>

  );
}

export default Navbar;
