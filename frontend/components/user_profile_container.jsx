import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchReservations } from '../actions/reservation_actions';
import { fetchCampsites } from '../actions/campsite_actions';
import { openModal } from '../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    reservations: Object.values(state.entities.reservations),
    campsites: state.entities.campsites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
    fetchCampsites: () => dispatch(fetchCampsites()),
    openModal: payload => dispatch(openModal(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);