import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION, CANCEL_RESERVATION } from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_RESERVATIONS:
      newState = action.reservations;
      return newState;
    case RECEIVE_RESERVATION:
      newState[action.reservation.id] = action.reservation;
      return newState;
    case CANCEL_RESERVATION:
      delete newState[action.reservationId];
      return newState;
    default:
      return state;
  }
}

export default reservationsReducer;