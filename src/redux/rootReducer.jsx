import { combineReducers } from "redux";

import calendarReducer from "./calendar/calendarReducer";
import contactReducer from "./contact/contactReducer";
import customiseReducer from "./customise/customiseReducer";
import ecommerceReducer from "./ecommerce/ecommerceReducer";
import operatorReducer from "./operator/operatorReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  contact: contactReducer,
  ecommerce: ecommerceReducer,
  customise: customiseReducer,
  operator: operatorReducer,
  auth: authReducer,
});

export default rootReducer;
