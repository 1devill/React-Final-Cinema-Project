import React from "react";

export const PlacesRow = ({ seats, index, handleChoosePlace }) => (
  <div className="row">
    <div className="row-legend">Row #{index + 1}</div>
    {seats.map((elem, n) => {
      return (
        <div
          key={`${index}-${n}`}
          className={`place${elem.booked ? " booked" : ""}`}
          onClick={() => handleChoosePlace(elem)}
        >
          <span>{elem.place}</span>
        </div>
      );
    })}
  </div>
);
