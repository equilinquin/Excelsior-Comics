import React, { Component } from "react";
// import { Link } from "react-router-dom";
import marvel from "../utils/marvel-api";
import Navbar from "../components/Navbar";
import Search from "../components/Search/index";
import ComicCards from "../components/ComicCards/index";
import API from "../utils/login-api";
// import "../styles/home.css"

class Home extends Component {
  state = {
    order: "ascending",
    searchString: "",
    sortedComics: []
  };

  handleSearch = e => {
    e.preventDefault();

    marvel.getComics(this.state.searchString, (err, APIresults) => {
      if (err) {
        return console.error(err);
      }
      console.log(APIresults);
      this.setState({ ...this.state, sortedComics: APIresults });
    });
  };

  handleChange = e => this.setState({ searchString: e.target.value });

  handleAddButtonClick = e => {
    e.preventDefault();

    const comicid = e.target.getAttribute("comicid");
    const addedComic = this.state.sortedComics.find(comic => comic.id === comicid);
    console.log(addedComic);
  };

  getUserInfo = data => {
    API.getUsers((err, res) => {
      if (err) {
        return console.error(err);
      }
      console.log(res);
    });
  }

  componentDidMount() {
    this.getUserInfo();
    return API.isLoggedIn
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col s12">
              <h5 className="center-align" style={{ marginTop: "35px" }}>
                Search by keyword and click{" "}
                <a className="btn-floating waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </a>{" "}
                to add a title to your reading list!
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <Search
                searchString={this.state.searchString}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <ComicCards
            sortedComics={this.state.sortedComics}
            handleAddButtonClick={this.handleAddButtonClick}
          />
        </div>
      </div>
    )
  }
}

export default Home;
