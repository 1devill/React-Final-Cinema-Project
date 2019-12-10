import React from "react";

import { Places, Form } from "../components";

export const PlacesWidget = ({
  space,
  handleChoosePlace,
  chosenPlace,
  showForm,
  handleClickBuy,
  handleOpenForm
}) => {
  return (
    <React.Fragment>
      <Places space={space} handleChoosePlace={handleChoosePlace} />
      {chosenPlace && (
        <div>
          <h3 className="chosen-seats">
            Row {chosenPlace.row}, Seat {chosenPlace.place} is chosen
          </h3>
          {showForm ? (
            <Form handleSubmitForm={handleClickBuy} />
          ) : (
            <div className="btn-container">
              <div onClick={handleOpenForm} className="btn btn-primary btn-buy">
                <span>Order</span>
              </div>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};
