import React from "react";

export const Poster = ({ posterLink, movieTitle, btnClick }) => (
  <div>
    <img src={posterLink} alt="poster" />
    <div className="title-block">
      <h3>{movieTitle}</h3>
    </div>
    <div className="btn-container">
      <div onClick={btnClick} className="btn btn-primary">
        <span>Buy</span>
      </div>
    </div>
  </div>
);
