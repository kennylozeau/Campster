import * as CampsiteApiUtils from '../util/campsite_api_util';

export const RECEIVE_ALL_CAMPSITES = 'RECEIVE_ALL_CAMPSITES';
export const RECEIVE_CAMPSITE = 'RECEIVE_CAMPSITE';

const receiveCampsites = campsites => {
  return {
    type: RECEIVE_ALL_CAMPSITES,
    campsites
  };
};

const receiveCampsite = payload => {
  return {
    type: RECEIVE_CAMPSITE,
    payload
  };
};

export const fetchCampsites = filters => dispatch => {
  return CampsiteApiUtils.fetchCampsites(filters)
    .then(campsites => dispatch(receiveCampsites(campsites)))
      // errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
};

export const fetchCampsite = (campsiteId) => dispatch => {
  return CampsiteApiUtils.fetchCampsite(campsiteId)
    .then(campsite => dispatch(receiveCampsite(campsite)))
  // errMsg => dispatch(receiveErrors(errMsg.responseJSON)))
};