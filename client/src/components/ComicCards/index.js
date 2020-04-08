import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ComicCards({ sortedComics }) {
  return (
    <div>
      {/* //conditional with statement and question mark to check and see if something is in array */}
      {/* //below is kind of like a mini if else statement */}
      {/* // below that is what to do */}
        {sortedComics[0] !== undefined && sortedComics[0].name !== undefined ? (
          sortedComics.map(({ character }) => {
          //{character.name}
          //img src={image.url} however it's phrased
          return (
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="" alt=""/>
                    <span className="card-title"></span>
                    <Link className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                  </div>
                  <div className="card-content">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            );
          })
        ) : (
          <div className="container">
            <h3>No results</h3>
          </div>
        )}
    </div>
  );
}

export default ComicCards;
