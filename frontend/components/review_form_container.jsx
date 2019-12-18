import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../actions/review_actions';
import { closeModal } from '../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);