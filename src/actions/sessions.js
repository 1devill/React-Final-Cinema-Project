import axios from "axios";
import { SESSIONS_URL, SET_SESSIONS, ROOMS_URL, SET_ROOMS } from '../constants';
import { isLoading, loadingFail } from "./general";

export const setSessions = (sessions) => ({ type: SET_SESSIONS, payload: sessions });
export const setRooms = (rooms) => ({ type: SET_ROOMS, payload: rooms });

export const getSessions = () => {
    return dispatch => {
        dispatch(isLoading());

        Promise.all([axios.get(SESSIONS_URL), axios.get(ROOMS_URL)])
            .then( ([sessions, rooms]) => {
                dispatch(setSessions(sessions.data.session));
                dispatch(setRooms(rooms.data.rooms));
            })
            .catch((error) => {
                dispatch(loadingFail());
                console.error(error);
            })
    }
}