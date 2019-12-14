import React from 'react';
import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import { createReservation } from '../actions/reservation_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReservation: reservation => dispatch(createReservation(reservation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);