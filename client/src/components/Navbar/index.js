import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar({ handleSearch }) {
  return (
    <div className="nav-wrapper">
      <h1>
        {" "}
        <Link className="navbar-brand" id="title" to="/login">
          {" "}
          Excelsior Comics
        </Link>
      </h1>
      <ul id="nav-mobile" className="hangar">
        <li>
          <Link className="navbar-brand" id="links" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" id="links" to="/home">
            Discover
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" id="links" to="/login">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
