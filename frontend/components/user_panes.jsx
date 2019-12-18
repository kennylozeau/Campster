import React from 'react';
import TripsPane from './trips_pane';

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
      <section className="main-panel">
        <div className="pane-tabs-btns">
          <button onClick={() => this.selectPane('trips')}>Trips</button>
          <button onClick={() => this.selectPane('reviews')}>Reviews</button>
        </div>
        {this.state.selectedPane === 'trips' ? <TripsPane props={this.props}/> : <h1>Test</h1>}
      </section>
    )
  }
}

export default UserPanes;