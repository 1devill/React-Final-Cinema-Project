import axios from "axios";
import { MOVIES_URL, SET_MOVIES } from "../constants";
import { isLoading, loadingFail } from "./general";

export const setMovies = movies => ({ type: SET_MOVIES, payload: movies });

export const getMovies = () => {
  return dispatch => {
    dispatch(isLoading());
    axios
      .get(MOVIES_URL)
      .then(({ data }) => dispatch(setMovies(data.movie)))
      .catch(error => {
        dispatch(loadingFail());
        console.error(error);
      });
  };
};
