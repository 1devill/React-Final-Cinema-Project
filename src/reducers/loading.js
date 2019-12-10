import {
  IS_LOADING,
  LOADING_FAIL,
  SET_MOVIES,
  SET_SESSIONS
} from "../constants";

const initialValues = {
  isLoading: false
};

export const loading = (state = initialValues, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOADING_FAIL:
    case SET_MOVIES:
    case SET_SESSIONS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
