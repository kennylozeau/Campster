import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const reviewsList = this.props.reviews.map( review => {
      return (
        <ReviewIndexItem key={review.id} review={review}/>
      )
    })

    if (reviewsList.length > 0) {
      return (
        <>
          {reviewsList}
        </>
      )
    } else {
      return (
        <>
          <h3 className="no-reviews" >No reviews yet!</h3>
        </>
      )
    }
    
  }
}

export default ReviewIndex;