import * as SessionApiUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const receiveCurrentUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = user => dispatch => {
  return SessionApiUtils.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
}

export const login = user => dispatch => {
  return SessionApiUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
}

// JUST ADDED THE ERROR REJECTION 12-13 9:30pm, REMOVE IF LOSS OF FUNCTIONALITY
export const logout = () => dispatch => {
  return SessionApiUtils.logout()
    .then(() => dispatch(logoutCurrentUser()),
      errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
}

export const fetchUser = userId => dispatch => {
  return SessionApiUtils.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)),
      errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
}