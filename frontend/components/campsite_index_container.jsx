import React from 'react';
import { connect } from 'react-redux';
import CampsiteIndex from './campsite_index';
import { fetchCampsites } from '../actions/campsite_actions';

const mapStateToProps = state => {
  return {
    campsites: Object.values(state.entities.campsites)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampsites: () => dispatch(fetchCampsites())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteIndex);