import React from "react";
import notAvailable from "./notAvailable.png";
import AddButton from "../AddButton";

function ComicCards(props) {
  return (
    <div>
      {/* //conditional with statement and question mark to check and see if something is in array */}
      {/* //below is kind of like a mini if else statement */}
      {/* // below that is what to do */}
      {props.sortedComics.length > 0 ? (
        props.sortedComics.map((result) => {
          let url;
          let comicId = result.id;
          let altText = `${result.title}`;
          let link = `${result.urls[0].url}`;
          let series = (!`${result.series.name}` ? "Not Available" : `${result.series.name}`)
          let writer = (!`${result.creators.items}` ? "Not Available" : `${result.creators.items[0].name}`)
          if (!`${result.images}`) {
            return (
              <div className="col s6 m4 l3" key={result.id} style={{ minHeight: "775px" }}>
                <div className="card">
                  <div className="card-image">
                    <a href={link}>
                      <img src={notAvailable} alt={altText} height="420"/>
                    </a>
                    <AddButton
                      comicid={comicId}
                      handleClick={props.handleSaveButtonClick}
                    />
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
            <div className="col s6 m4 l3" key={result.id} style={{ minHeight: "775px" }}>
              <div className="card">
                <div className="card-image">
                  <a href={link}>
                    <img src={url} alt={altText} />
                  </a>
                  <AddButton
                    comicid={comicId}
                    handleClick={props.handleAddButtonClick}
                  />
                </div>
                <div className="card-content" style={{minHeight: "140px"}}>
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
