import React from "react";
import { Link } from "react-router-dom";
import notAvailable from "./notAvailable.png";

function ComicCards({ sortedComics }) {

  return (
    <div>
      {/* //conditional with statement and question mark to check and see if something is in array */}
      {/* //below is kind of like a mini if else statement */}
      {/* // below that is what to do */}
      {sortedComics.length > 0? (
        sortedComics.map((result) => {
          let url;
          let altText = `${result.title}`;
          let link = `${result.urls[0].url}`;
          let series = (!`${result.series.name}` ? "Not Available" : `${result.series.name}`)
          let writer = (!`${result.creators.items}` ? "Not Available" : `${result.creators.items[0].name}`)
          // let imgLink = <img src={url} alt={altText} />
          if (!`${result.images}`) {
            console.log(result.creators)
            return (
              <div className="col s6 m4 l3" key={result.id} style={{minHeight: "560px"}}>
                <div className="card">
                  <div className="card-image">
                    <a href={link}>
                      <img src={notAvailable} alt={altText} />
                      {/* {imgLink} */}
                    </a>
                    <Link
                      className="btn-floating halfway-fab waves-effect waves-light red"
                      to=""
                    >
                      <i className="material-icons">add</i>
                    </Link>
                  </div>
                  <div className="card-content">
                    {/* <p>Title: {result.title}</p> */}
                    <p>Series: {series}</p>
                    <p>Issue: {result.issueNumber}</p>
                    <p>Writer: {writer}</p>
                  </div>
                </div>
              </div>
            );
          } else {
             url = `${result.images[0].path}/portrait_uncanny.${result.images[0].extension}`;
          }
         // let buyLink = `${result.urls[1].url}`;
          return (
            <div className="col s6 m4 l3" key={result.id} style={{minHeight: "560px"}}>
              <div className="card">
                <div className="card-image">
                  <a href={link}>
                    <img src={url} alt={altText} style={{maxHeight: "450px", overflow: "hidden"}} />
                    {/* {imgLink} */}
                  </a>
                  <Link
                    className="btn-floating halfway-fab waves-effect waves-light red"
                    to=""
                  >
                    <i className="material-icons">add</i>
                  </Link>
                </div>
                <div className="card-content">
                  {/* <p>Title: {result.title}</p> */}
                  <p>Series: {series}</p>
                  <p>Issue: {result.issueNumber}</p>
                  <p>Writer: {writer}</p>
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
