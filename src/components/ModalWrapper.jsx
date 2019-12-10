import React from "react";
import axios from "axios";
import { Spin, Icon } from "antd";

import { SPACE_SHADOW_URL } from "../constants";
import { getSortedPlaces, getRowsArray, getRandomInt } from "../utils";
import { ModalContent } from "../components";

export class ModalWrapper extends React.Component {
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
            <ModalContent
              user={user}
              chosenPlace={chosenPlace}
              handleCloseModal={handleCloseModal}
              session={session}
              showForm={showForm}
              space={space}
              handleChoosePlace={this.handleChoosePlace}
              handleClickBuy={this.handleClickBuy}
              handleOpenForm={this.handleOpenForm}
            />
          )}
        </div>
      </div>
    );
  }
}
