import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

// const mapDispatchToProps = dispatch => {
//   return {

//   };
// };

export default connect(mapStateToProps)(UserProfile);