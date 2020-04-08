import React from "react";
import "./style.css";

function ComicCards({ sortedComics }) {
  return (
    <tbody>
      {/* //conditional with statement and question mark to check and see if something is in array */}
      {/* //below is kind of like a mini if else statement */}
      {/* // below that is what to do */}
      {sortedComics[0] !== undefined && sortedComics[0].name !== undefined ? (
              sortedComics.map(({ character }) => {
            //{character.name}
                  //img src={image.url} however it's phrased
          return (
               <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg" />
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
          );
        })
      ) : (
        <div className="conatiner">
          <h1>No results to display</h1>
        </div>
      )}
    </tbody>
  );
}

export default ComicCards;
