import React from "react";
import { Icon } from "antd";

import { SessionInfo, PlacesWidget } from "../components";

export const ModalContent = ({
  session,
  user,
  chosenPlace,
  space,
  showForm,
  handleCloseModal,
  handleChoosePlace,
  handleClickBuy,
  handleOpenForm
}) => {
  return (
    <div>
      <h4>{session.movie.title}</h4>
      <SessionInfo room={session.room} date={session.date} />
      {user ? (
        <div className="success-message">
          <h3>{user.name} Tnx for purchasing!</h3>
          <p>
            Row is {chosenPlace.row}, seat # {chosenPlace.place}. Your ticket
            was sent you on your email. See ya.
          </p>
        </div>
      ) : (
        <PlacesWidget
          space={space}
          showForm={showForm}
          handleChoosePlace={handleChoosePlace}
          handleClickBuy={handleClickBuy}
          handleOpenForm={handleOpenForm}
          chosenPlace={chosenPlace}
        />
      )}

      <span className="btn-close" onClick={handleCloseModal}>
        <Icon type="close" />
      </span>
    </div>
  );
};
