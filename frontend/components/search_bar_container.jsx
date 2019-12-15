import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = state => {
  return {
    campsites: Object.values(state.entities.campsites)
  };
};

export default connect(mapStateToProps)(SearchBar);