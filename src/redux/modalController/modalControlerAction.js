import { OPERATOR_EDIT_MODAL, SLIDER_ADD_MODAL } from "./modalControllerType";

export const handelOperatorEditModal = (data) => {
  return {
    type: OPERATOR_EDIT_MODAL,
    payload: data,
  };
};

export const handelSliderAddModal = (data) => {
  return {
    type: SLIDER_ADD_MODAL,
    payload: data,
  };
};
