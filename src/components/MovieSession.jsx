import React, { useState } from "react";

import { Poster, ModalBuyTicket, SessionInfo } from "../components";

export const MovieSession = ({ session }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModel = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <div className="movie-session">
        <div className="movie-info">
          <Poster
            movieTitle={session.movie.title}
            posterLink={session.movie.poster}
            btnClick={toggleShowModel}
          />
        </div>
        <div>
          <p>{session.movie.description}</p>
          <SessionInfo room={session.room} date={session.date} />
        </div>
      </div>
      {showModal && (
        <ModalBuyTicket session={session} handleCloseModal={toggleShowModel} />
      )}
    </React.Fragment>
  );
};
