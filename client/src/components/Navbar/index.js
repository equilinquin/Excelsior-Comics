import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar({ handleSearch }) {
  return (
    <div class="nav-wrapper">
      <h1>
        Excelsior Comics <a className="navbar-brand" href="/"></a>
      </h1>
      <ul id="nav-mobile" className="hangar">
        <li>
          <Link className="navbar-brand" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" to="/home">
            Discover
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" to="/login">
            Log Out
          </Link>
        </li>
      </ul>
    </div>

    // <nav className="navbar navbar-expand-lg header">
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <a className="navbar-brand" href="/">
    //       Excelsior Comics
    //       <ul id="nav-mobile" className="right hide-on-med-and-down">
    //         {" "}
    //         <li>
    //           <Link className="navbar-brand" to="/profile">
    //             Profile
    //           </Link>
    //         </li>
    //         {" "}
    //         <li>
    //           <Link className="navbar-brand" to="/home">
    //             Discover
    //           </Link>
    //         </li>
    //         {" "}
    //         <li>
    //           <Link className="navbar-brand" to="/login">
    //             Log Out
    //           </Link>
    //         </li>
    //         {" "}
    //       </ul>
    //       >
    //     </a>
    //   </div>
    // </nav>

    // <nav>
    //     <div className="nav-wrapper">
    //     <Link to="/home" className="brand-logo">Excelsior Comics</Link>
    //     <ul id="nav-mobile" className="right hide-on-med-and-down">
    //         <li><Link className="navbar-brand" to="/profile">Profile</Link></li>
    //         <li><Link className="navbar-brand" to="/home">Discover</Link></li>
    //         <li><Link className="navbar-brand" to="/login">Log Out</Link></li>
    //     </ul>
    //     </div>
    // </nav>
  );
}

export default Navbar;
