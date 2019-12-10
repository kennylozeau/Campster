import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../actions/session_actions';
import { closeModal } from '../actions/modal_actions';

// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(SignupForm);