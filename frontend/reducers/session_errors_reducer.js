import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = [];
      return newState;
    case CLOSE_MODAL:
      newState = [];
      return newState;
    case CLEAR_ERRORS:
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;