import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
});

const filterReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_BOUNDS:
      newState = {bounds: action.bounds};
      return newState;
    default:
      return state;
  }
};

export default filterReducer;