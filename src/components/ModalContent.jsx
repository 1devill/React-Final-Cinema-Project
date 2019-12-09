import React from "react";
import axios from "axios";
import { Spin, Icon } from "antd";

import { SPACE_SHADOW_URL } from "../constants";
import { getSortedPlaces, getRowsArray, getRandomInt } from "../utils";
import { SessionInfo, Places, Form } from "../components";

export class ModalContent extends React.Component {
  state = {
    isLoading: true,
    space: [],
    chosenPlace: null,
    showForm: false,
    user: null
  };

  componentDidMount() {
    axios
      .get(`${SPACE_SHADOW_URL}?session=${this.props.session._id}`)
      .then(({ data }) => {
        this.setLoadingDone();
        this.getPlaceArray(data.space);
      })
      .catch(error => {
        this.setLoadingDone();
        console.error(error);
      });
  }

  setLoadingDone = () => this.setState({ isLoading: false });

  getPlaceArray = arr => {
    const sortedByRow = getSortedPlaces(arr, "row");
    const rows = getRowsArray(sortedByRow);
    const rowsSortedByPlace = rows.map(item => {
      return getSortedPlaces(item, "place");
    });
    this.setState({
      space: rowsSortedByPlace.map(item => {
        const randomBookedPlace = getRandomInt(2, 6);
        return item.map(elem => {
          if (elem.place % randomBookedPlace === 0) {
            return {
              ...elem,
              booked: true
            };
          }
          return elem;
        });
      })
    });
  };

  handleChoosePlace = data => {
    this.setState({ chosenPlace: data });
  };

  handleOpenForm = () => {
    this.setState({ showForm: true });
  };

  handleClickBuy = data => {
      this.setState({ user: data });
  };

  render() {
    const { isLoading, space, chosenPlace, showForm, user } = this.state;
    const { session, handleCloseModal } = this.props;

    return (
      <div className="modal-wrapper">
        <div className="modal-content">
          {isLoading ? (
            <Spin
              indicator={<Icon type="sync" style={{ fontSize: 35 }} spin />}
            />
          ) : (
            <div>
              <h4>{session.movie.title}</h4>
              <SessionInfo room={session.room} date={session.date} />
              {user ? (
                <div className='success-message'>
                  <h3>{user.name} Tnx for purchasing!</h3>
                  <p>
                    Row is {chosenPlace.row}, seat # {chosenPlace.place}. Your
                    ticket was sent you on your email. See ya.
                  </p>
                </div>
              ) : (
                <React.Fragment>
                  <Places
                    space={space}
                    handleChoosePlace={this.handleChoosePlace}
                  />
                  {chosenPlace && (
                    <div>
                      <h3 className="chosen-seats">
                        Row {chosenPlace.row}, Seat {chosenPlace.place} is/are
                        chosen
                      </h3>
                      {showForm ? (
                        <Form handleSubmitForm={this.handleClickBuy} />
                      ) : (
                        <div className="btn-container">
                          <div
                            onClick={this.handleOpenForm}
                            className="btn btn-primary btn-buy"
                          >
                            <span>Order</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </React.Fragment>
              )}

              <span className="btn-close" onClick={handleCloseModal}>
                <Icon type="close" />
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
