import * as SessionApiUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
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
  debugger
  return SessionApiUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
}

export const logout = () => dispatch => {
  return SessionApiUtils.logout()
    .then(() => dispatch(logoutCurrentUser()))
}