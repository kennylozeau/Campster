import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _nullState = {
  window: null,
  data: null
}

const modalReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case OPEN_MODAL:
      newState = action.modal;
      return newState;
    case CLOSE_MODAL:
      newState = {};
      newState = _nullState;
      return newState;
    default:
      return state;
  }
};

export default modalReducer;