import React from 'react';
import { connect } from 'react-redux';
import CampsiteShow from './campsite_show';
import { fetchCampsite } from '../actions/campsite_actions';
import { fetchReservations } from '../actions/reservation_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    campsite: state.entities.campsites[ownProps.match.params.campsiteId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampsite: campsiteId => dispatch(fetchCampsite(campsiteId)),
    fetchReservations: () => dispatch(fetchReservations())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteShow);