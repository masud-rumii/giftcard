import * as authTypes from "./authTypes";

export const setIsLoggedIn = (status) => {
  return {
    type: authTypes.SET_IS_LOGGEDIN,
    payload: status,
  };
};
