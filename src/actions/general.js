import { IS_LOADING, LOADING_FAIL } from "../constants";

export const isLoading = () => ({ type: IS_LOADING });
export const loadingFail = () => ({ type: LOADING_FAIL });
