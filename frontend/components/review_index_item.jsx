import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  render() {

    const { review } = this.props;

    return (
      <div className="review-container">
        <div className="review-header">
          <h1>{review.title}</h1>
          <h2>Review created on {this.formatDate(review.created_at)}</h2>
        </div>
        <div className="review-body">
          <h1>{review.body}</h1>
          <h2>Camper's rating: {review.rating}/5</h2>
        </div>
      </div>
    )
  }
}

export default ReviewIndexItem;