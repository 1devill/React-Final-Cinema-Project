import { SET_MOVIES, SET_ROOMS, SET_SESSIONS } from "../constants";

const initialValues = {
  movies: [],
  genres: [],
  rooms: [],
  sessions: []
};

export const data = (state = initialValues, action) => {
  switch (action.type) {
    case SET_MOVIES:
      const genres = action.payload.reduce((acc, item) => {
        if (item.genre && item.genre.length) {
          item.genre.forEach(elem => {
            if (elem && !acc.includes(elem.trim())) {
              acc.push(elem.trim());
            }
          });
        }
        return acc;
      }, []);

      return {
        ...state,
        movies: action.payload,
        genres
      };
    case SET_SESSIONS:
      const sortedArray = action.payload.sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) {
          return 1;
        }
        if (new Date(a.date) < new Date(b.date)) {
          return -1;
        }
        return 0;
      });

      const newArray = sortedArray.reduce((acc, item) => {
        if (!acc.length) {
          acc.push([]);
        }
        const lastElem = acc[acc.length - 1];
        const lastElemDate = lastElem.length
          ? lastElem[0].date.split("T")[0]
          : null;
        const itemDate = item.date.split("T")[0];
        const differentDates = +new Date(lastElemDate) !== +new Date(itemDate);

        if (lastElem.length && differentDates) {
          return [...acc, [item]];
        }

        lastElem.push(item);

        return acc;
      }, []);

      return {
        ...state,
        sessions: newArray
      };

    case SET_ROOMS:
      return {
        ...state,
        rooms: action.payload
      };
    default:
      return state;
  }
};
