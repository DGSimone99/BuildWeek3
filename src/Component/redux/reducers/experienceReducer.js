import { SET_EXPERIENCES } from "../actions";

const initialState = {
  content: [],
};
const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default experienceReducer;
