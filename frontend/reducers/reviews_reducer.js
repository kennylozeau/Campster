import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_CAMPSITE } from '../actions/campsite_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CAMPSITE:
      if (action.payload.reviews) {
        newState = action.payload.reviews;
      };
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.payload.reviews) {
        newState = action.payload.reviews;
      };
      return newState;
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;