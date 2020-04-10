import React, { Component } from "react";
// import { Link } from "react-router-dom";
import marvel from "../utils/marvel-api";
import Navbar from "../components/Navbar";
import Search from "../components/Search/index";
import ComicCards from "../components/ComicCards/index";
import styles from "../styles/home.css"

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
      <div>
        <Navbar />
      </div>
        <div className="body">
          <div className="row">

            <div className="container row">
              <div className="col s12">
                <h5 className="center-align">
                  Start searching by character or title:
                </h5>
                <Search handleSearch={this.state.handleSearch} />
              </div>
            </div>
          </div>

          <div className="row">
            <ComicCards sortedComics={this.state.sortedComics} />
          </div>
        </div>
        </div>
      
    );
  }
}
