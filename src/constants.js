export const BASE_URL = "http://subdomain.entony.fs.a-level.com.ua/api/";
export const MOVIES_URL = `${BASE_URL}movie/`;
export const SESSIONS_URL = `${MOVIES_URL}session/`;
export const ROOMS_URL = `${MOVIES_URL}room/`;
export const SPACE_SHADOW_URL = `${MOVIES_URL}space-shadow/`;

export const SET_MOVIES = "SET_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const LOADING_FAIL = "LOADING_FAIL";
export const SET_SESSIONS = "SET_SESSIONS";
export const SET_ROOMS = "SET_ROOMS";
export const dateOptions = {
  month: "long",
  day: "numeric"
};
