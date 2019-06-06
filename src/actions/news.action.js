import { SUCCESS, FAILURE, LOADING, URL } from "../utils/constant";

export const DATA_LOADING = "DATA_LOADING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const newsFeedRequest = () => ({
  type: DATA_LOADING
});

export const newsFeedSuccess = data => ({
  type: DATA_SUCCESS,
  data
});

export const newsFeedFailure = err => ({
  type: DATA_FAILURE,
  err
});

export const getData = () => {
  return async dispatch => {
    dispatch(newsFeedRequest());
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch(newsFeedSuccess(data.articles));
      return;
    } catch (error) {
      dispatch(newsFeedFailure(error));
    }
  };
};
