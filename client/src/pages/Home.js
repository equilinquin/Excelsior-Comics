import React, { Component } from "react";
// import { Link } from "react-router-dom";
import marvel from "../utils/marvel-api";
import Navbar from "../components/Navbar";
import Search from "../components/Search/index";
import ComicCards from "../components/ComicCards/index";
// import "../styles/home.css"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      order: "ascending",
      sortedComics: [{}],
      handleSearch: (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const search = document.getElementById("searchTerm").value;
        marvel.getComics(search, (APIresults) => {
          console.log(APIresults);
          this.setState({ ...this.state, sortedComics: APIresults });
        });
      },
    };
  }

  render() {
    return (
      <div>

        <Navbar />

        <div className="container">

          <div className="row">
            <div className="col s12">
              <h5 className="center-align" style={{marginTop: "35px"}}>
                Search by keyword and click <a className="btn-floating waves-effect waves-light red"><i class="material-icons">add</i></a> to add a title to your reading list!
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <Search handleSearch={this.state.handleSearch} />
            </div>
          </div>

        </div>
        
        <div className="row">
          <ComicCards sortedComics={this.state.sortedComics} />
        </div>

      </div>    
    );
  }

}
