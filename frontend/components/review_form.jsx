import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      rating: '',
      reservation_id: this.props.reservationId,
      campsite_id: this.props.campsiteId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createReview(this.state)
      .then(() => this.props.closeModal());
  }

  render() {

    return (
      <>
        <header className="modal-header">
          <h1>Write a review</h1>
          <h2>Discover camping in your area</h2>
        </header>
        <form id="signup-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.update('title')} />
          <input
            type="text"
            placeholder="Body"
            value={this.state.body}
            onChange={this.update('body')} />
          <input
            type="text"
            placeholder="Rating"
            value={this.state.rating}
            onChange={this.update('rating')} />
          <button>Create review</button>
        </form>
      </>
    )
  }
}

export default ReviewForm;