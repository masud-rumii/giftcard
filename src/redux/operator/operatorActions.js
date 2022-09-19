import { ALL_OPERATORS, OPERATOR_LOADING } from "./operatorType";

export const allOperators = (data) => {
  return {
    type: ALL_OPERATORS,
    payload: data,
  };
};

export const operatorLoadingFunc = (data) => {
  return {
    type: OPERATOR_LOADING,
    payload: data,
  };
};
