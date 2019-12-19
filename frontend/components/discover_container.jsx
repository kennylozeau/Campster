import { connect } from 'react-redux';
import { updateBounds } from '../actions/filter_actions';
import Discover from './discover';

const mapStateToProps = (state, ownProps) => {
  return {
    campsites: Object.values(state.entities.campsites),
    location: ownProps.location
  };
};

const mapDispatchToProps = dispatch => ({
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);