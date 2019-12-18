import * as ReviewApiUtils from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const createReview = review => dispatch => {
  return ReviewApiUtils.createReview(review)
    .then(review => dispatch(receiveReview(review)))
  // errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
};