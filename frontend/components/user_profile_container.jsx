import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchReservations } from '../actions/reservation_actions';
import { fetchCampsites } from '../actions/campsite_actions';
import { openModal } from '../actions/modal_actions';
import { fetchUser } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    reservations: Object.values(state.entities.reservations),
    campsites: state.entities.campsites,
    reviews: Object.values(state.entities.reviews)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
    fetchCampsites: () => dispatch(fetchCampsites()),
    openModal: payload => dispatch(openModal(payload)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);