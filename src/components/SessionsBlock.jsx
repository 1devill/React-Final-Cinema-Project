import React from "react";

import { MovieSession } from "./MovieSession";

export const SessionsBlock = ({ movieOnDate }) => {
  return movieOnDate.map(elem => (
    <MovieSession key={elem._id} session={elem} />
  ));
};
