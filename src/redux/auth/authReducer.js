import * as authTypes from "./authTypes";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")),
  isLoggedIn: localStorage.getItem("userInfo") ? true : false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authTypes.SET_IS_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: state.isLoggedIn,
      };

    default:
      return state;
  }
}
