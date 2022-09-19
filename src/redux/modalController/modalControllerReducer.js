import { OPERATOR_EDIT_MODAL, SLIDER_ADD_MODAL } from "./modalControllerType";

const initialState = {
  isOperatorEditModal: false,
  isSliderAddModal: false,
};

export default function modalControllerReducer(state = initialState, action) {
  switch (action.type) {
    case OPERATOR_EDIT_MODAL:
      return {
        ...state,
        isOperatorEditModal: action.payload,
      };
    case SLIDER_ADD_MODAL:
      return {
        ...state,
        isSliderAddModal: action.payload,
      };

    default:
      return state;
  }
}
