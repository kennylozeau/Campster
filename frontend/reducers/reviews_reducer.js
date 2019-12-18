import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_CAMPSITE } from '../actions/campsite_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CAMPSITE:
      newState = action.payload.reviews;
      return newState;
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;