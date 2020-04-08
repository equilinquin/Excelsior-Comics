import React, { Component } from "react";
//import API from "../../public/js/comic-api";
import Search from "../components/Search/index";
import ComicCards from "../components/ComicCards/index";

export default class Home extends Component {
                 constructor() {
                   super();
                   this.state = {
                     comics: [{}],
                     order: "ascending",
                     sortedComics: [{}],
                     handleSearch: (e) => {
                       console.log(e.target.value);
                       const search = e.target.value;
                       const filteredTable = this.state.users.filter(
                         (event) => {
                           let searchItem = Object.values(event)
                             .join("")
                             .toLowerCase();
                           return (
                             searchItem.indexOf(search.toLowerCase()) !== -1
                           );
                         }
                       );
                       this.setState({ filteredSearch: filteredTable });
                     },
                   };
                 }
  //handleAPI and onClick method
  //Uncomment once API is called
                //  componentDidMount() {
                //    // waits until component is called on to show up in broswer and then does a function
                //    API.getAPIUsers().then((APIresults) => {
                //      // as soon as component is ready on users browsers, results will be waiting to do something with them
                //      this.setState({
                //        users: APIresults.data.results,
                //        //.data comes from API
                //        filteredSearh: APIresults.data.results,
                //        //build table and get results to display
                //        //this.state.users to show up on page
                //        //map function used when info inside db will be changing and it will need to be updated and displayed
                //      });
                //      console.log(this.state.filteredSearch);
                //      //sort by one category and filter by one property
                //    });
                //  }
                 render() {
                   return (
                     <div className="container">
                       <div className="wrapper">
                         <Search handleSearch={this.state.handleSearch} />
                         <div className="container">
                           <div className="row">
                             <div className="col-md-6 col-md-offset-3">
                               <h2>
                                 Welcome <span className="member-name"></span>
                               </h2>
                             </div>
                           </div>
                         </div>
                         <ComicCards sortedComics={this.state.sortedComics} />
                       </div>
                     </div>
                   );
                 }
               }
