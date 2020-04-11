import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class Navbar extends Component {

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
  }

  render() {
    return(
    <div>

      <nav>
        <div className="nav-wrapper">
          <p className="brand-logo" id="app-logo"><Link to="/home">Excelsior Comics</Link></p>
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
}

export default Navbar;
