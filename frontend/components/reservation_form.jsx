import React from 'react';
import { withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camperId: this.props.currentUserId,
      campsiteId: this.props.match.params.campsiteId,
      startDate: '',
      endDate: ''
    }

    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createReservation({
      camper_id: this.state.camperId,
      campsite_id: this.state.campsiteId,
      start_date: this.state.startDate,
      end_date: this.state.endDate
    });
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value})
  }

  render() {
    let today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    today = `${year}-${month}-${day}`;
    return (
      <form className="reservation-form" onSubmit={this.handleSubmit}>
        <label>Start date
          <input type="date" min={today} onChange={this.update('startDate')} />
        </label>
        <label>End date
          <input type="date" min={today} onChange={this.update('endDate')} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default withRouter(ReservationForm);