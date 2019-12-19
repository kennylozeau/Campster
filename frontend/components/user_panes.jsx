import React from 'react';
import TripsPane from './trips_pane';
import ReviewsPane from './reviews_pane';

class UserPanes extends React.Component {
  constructor(props) {
    
    super(props);

    this.state = {
      selectedPane: 'trips'
    };

    this.selectPane = this.selectPane.bind(this);
  }

  selectPane(pane) {
    this.setState({selectedPane: pane});
  }

  render() {

    return (
      <>
        <div className="main-pane-tabs-btns">
          <button onClick={() => this.selectPane('trips')}>Trips</button>
          <button onClick={() => this.selectPane('reviews')}>Reviews</button>
        </div>
        <section className="main-pane">
          <div className="main-pane-content">
            {this.state.selectedPane === 'trips' ? <TripsPane props={this.props} /> : <ReviewsPane props={this.props} />}
          </div>
        </section>
      </>
    )
  }
}

export default UserPanes;