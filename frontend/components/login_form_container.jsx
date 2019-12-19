import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, logout } from '../actions/session_actions';
import { closeModal, openModal } from '../actions/modal_actions';

// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    // logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    openModal: payload => dispatch(openModal(payload))
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);