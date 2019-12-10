import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './test';
import { login } from '../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);