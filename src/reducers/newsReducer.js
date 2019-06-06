import * as actions from "../actions/news.action";

const INITIAL_STATE = {
  loading: false,
  data: "",
  error: null
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.DATA_LOADING:
      return { ...state, loading: true };
    case actions.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };

    case actions.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default newsReducer;
