import * as ReservationApiUtils from '../util/reservation_api_util';

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const receiveAllReservations = reservations => {
  return {
    type: RECEIVE_ALL_RESERVATIONS,
    reservations
  };
};

const receiveReservation = reservation => {
  return {
    type: RECEIVE_RESERVATION,
    reservation
  };
};

const removeReservation = reservationId => {
   return {
     type: CANCEL_RESERVATION,
     reservationId
   };
};

export const fetchReservations = () => dispatch => {
  return ReservationApiUtils.fetchReservations()
    .then(reservations => dispatch(receiveAllReservations(reservations)))
      // errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
};

export const createReservation = reservation => dispatch => {
  return ReservationApiUtils.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
      // errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
};

export const updateReservation = reservation => dispatch => {
  return ReservationApiUtils.updateReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
      // errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
};

export const cancelReservation = reservationId => dispatch => {
  return ReservationApiUtils.cancelReservation(reservationId)
    .then(() => dispatch(removeReservation(reservationId)))
      // errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
};