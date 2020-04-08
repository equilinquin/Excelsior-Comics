import React, { Component } from "react";
import { Link } from "react-router-dom";
import marvel from "../utils/marvel-api";
import Search from "../components/Search/index";
import ComicCards from "../components/ComicCards/index";

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
        // const sortedComics = this.state.comics.filter((event) => {
        //   let searchItem = Object.values(event).join("").toLowerCase();
        //   return searchItem.indexOf(search.toLowerCase()) !== -1;
        // });
      },
    };
  }
  // handleAPI and onClick method
  // Uncomment once API is called
   componentDidMount() {
     // waits until component is called on to show up in broswer and then does a function
    //  marvel.getComics("Avengers", function(APIresults) {
    //    console.log(APIresults);
    //  });
    //  .then((APIresults) => {
    //    // as soon as component is ready on users browsers, results will be waiting to do something with them
    //    this.setState({
    //      comics: APIresults.data.results,
    //      //.data comes from API
    //      filteredSearch: APIresults.data.results,
    //      //build table and get results to display
    //      //this.state.users to show up on page
    //      //map function used when info inside db will be changing and it will need to be updated and displayed
    //    });
    //    console.log(this.state.comics);
    //    //sort by one category and filter by one property
    //  });
   }
  render() {
    return (
      <div>

        <nav>
          <div className="nav-wrapper">
            <Link to="/home" className="brand-logo">Welcome</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link className="navbar-brand" to="/login">Logout</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container">

          <div className="row">
            <div className="col s12">
              <h5 className="center-align">Start searching by character or title:</h5>
            </div>
          </div>

          <div className="container row">
            <div className="col s12">
              <Search handleSearch={this.state.handleSearch} />
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <ComicCards sortedComics={this.state.sortedComics} />
            </div>
          </div>

        </div>

      </div>
    );
  }
}
