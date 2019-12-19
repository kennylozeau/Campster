import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewsPane extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { currentUser, reservations, campsites, reviews } = this.props.props;
    
    const reviewsList = reviews.map(review => {  
      return (
        <ReviewIndexItem
          key={Math.floor(Math.random() * 9999)}
          className="reservation-list-item"
          review={review} />
      )
    });


    return (
      <>
        {reviewsList}
      </>
    )
  }
}

export default ReviewsPane;