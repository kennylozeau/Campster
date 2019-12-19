import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: payload => dispatch(openModal(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);