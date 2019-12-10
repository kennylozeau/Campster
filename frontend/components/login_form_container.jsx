import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, logout } from '../actions/session_actions';
import { closeModal } from '../actions/modal_actions';

// const mapStateToProps = ({ entities, session }) => {
//   return {
//     currentUser: entities.users[session.id]
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    // logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);