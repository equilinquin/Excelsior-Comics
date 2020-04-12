import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import notAvailable from "./notAvailable.png";

function ComicCards({ sortedComics }) {
  return (
    <div>
      {/* //conditional with statement and question mark to check and see if something is in array */}
      {/* //below is kind of like a mini if else statement */}
      {/* // below that is what to do */}
        {sortedComics.length > 0 ? (
          sortedComics.map( (result) => {
          // if (`${result.images.length}` === 0) {
          //   return url = notAvailable;
          // } else {
          //   url = `${result.images[0].path}/portrait_incredible.${result.images[0].extension}`;
          // };
          let url = `${result.images[0].path}/portrait_incredible.${result.images[0].extension}`;
          let altText = `${result.title}`;
          let link = `${result.urls[0].url}`;
          //let buyLink = `${result.urls[1].url}`;
          return (
            <div className="col s6 m4 l3" key={result.id}>
              <div className="card">
                <div className="card-image">
                  <a href={link}><img src={url} alt={altText}/></a>
                  <Link className="btn-floating halfway-fab waves-effect waves-light red" to=""><i className="material-icons">add</i></Link>
                </div>
                <div className="card-content" style={{minHeight: "200px"}}>
                  {/* <p>Title: {result.title}</p> */}
                  <p>Series: {result.series.name}</p>
                  <p>Issue: {result.issueNumber}</p>
                  <p>Writer: {result.creators.items[0].name}</p>
                </div>
              </div>
            </div>
            );
          })
        ) : (
          <div className="container">
            <h4 className="center-align">No results</h4>
          </div>
        )}
    </div>
  );
}

export default ComicCards;
