import React from "react";

import { PlacesRow } from "../components";

export const Places = ({ space, handleChoosePlace }) => {
  return (
    <div className="places">
      {space.map((item, i) => {
        return (
          <PlacesRow
            key={i}
            index={i}
            seats={item}
            handleChoosePlace={handleChoosePlace}
          />
        );
      })}
    </div>
  );
};
