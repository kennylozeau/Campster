import { RECEIVE_ALL_CAMPSITES, RECEIVE_CAMPSITE} from '../actions/campsite_actions';

const campsitesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_ALL_CAMPSITES:
      newState = action.campsites;
      return newState;
    case RECEIVE_CAMPSITE:
      const { campsite } = action.payload;
      newState[campsite.id] = campsite;
      return newState;
    default:
      return state;
  };
};

export default campsitesReducer;