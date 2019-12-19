import { connect } from 'react-redux';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.entities.reviews)
  };
};

// const mapDispatchToProps = dispatch => {
//   return {

//   };
// };

export default connect(mapStateToProps)(ReviewIndex)