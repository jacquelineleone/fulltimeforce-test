import { GET_COMMITS } from "../../actions/actionTypes";

const initialState = {
  commits: [],
};

const commitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMITS:
      return {
        ...state,
        commits: action.payload,
      };
    default:
      return state;
  }
};

export default commitsReducer;
