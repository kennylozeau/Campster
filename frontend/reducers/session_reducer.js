import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
  id: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = { id: action.payload.user.id }
      return newState;
    case LOGOUT_CURRENT_USER:
      newState = _nullSession;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;