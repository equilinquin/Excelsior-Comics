import React from "react";
import "./style.css";

function Search({ handleSearch }) {
  return (
    <form className="form">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" id="searchTerm"/>
      <button className="btn btn-outline-success my-2 my-sm-0" id="btn-text" type="submit" onClick={(e) => handleSearch(e)}>Search</button>
    </form>
  );
}
export default Search;
