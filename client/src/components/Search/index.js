import React from "react";
import "./style.css";

function Search(props) {
  return (
    <form className="form"
      onSubmit={props.handleSearch}
    >
      <input className="form-control" id="pulse" type="search" placeholder="Search" aria-label="Search" id="searchTerm"
        value={props.searchString}
        onChange={props.handleChange}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" id="btn" type="submit">Search</button>
    </form>
  );
}
export default Search;
