import { fetchCampsites } from './campsite_actions'

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

const changeBounds = bounds => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchCampsites(getState().ui.filter)(dispatch);
};