import React from 'react';
import { connect } from 'react-redux';
import DemoLogin from './demo_login';
import { login } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    openModal: payload => dispatch(openModal(payload)),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(DemoLogin);