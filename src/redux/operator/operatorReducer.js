import { ALL_OPERATORS } from "./operatorType";

const initialState = {
  data: [],
};

const operatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_OPERATORS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default operatorReducer;
