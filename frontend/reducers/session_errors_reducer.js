import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  debugger
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;