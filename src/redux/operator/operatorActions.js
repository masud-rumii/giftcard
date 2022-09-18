import { ALL_OPERATORS } from "./operatorType";

export const allOperators = (data) => {
  return {
    type: ALL_OPERATORS,
    payload: data,
  };
};
