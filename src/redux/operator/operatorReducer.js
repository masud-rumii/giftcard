import { ALL_OPERATORS, OPERATOR_LOADING } from "./operatorType";

const initialState = {
  data: [],
  isLoading: false,
};

const operatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_OPERATORS:
      return {
        ...state,
        data: action.payload,
      };
    case OPERATOR_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default operatorReducer;
