import React from "react";
import "./style.css";

function Search({ handleSearch }) {
  return (
    <form className="form-inline">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => handleSearch(e)}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
export default Search;
