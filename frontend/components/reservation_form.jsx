import React from 'react';
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../app/assets/stylesheets/datepicker_override.css'
import { SingleDatePicker } from 'react-dates';
import { throws } from 'assert';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camperId: this.props.currentUserId,
      campsiteId: this.props.match.params.campsiteId,
      startDate: null,
      endDate: null,
      focusedStart: null,
      focusedEnd: null
    }

    this.handleSubmit= this.handleSubmit.bind(this);
    this.isHighlighted = this.isHighlighted.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   debugger
  //   if (prevProps.currentUserId !== this.props.currentUserId) {

  //   }
  // }

  handleSubmit(event) {
    event.preventDefault();
    
    const reservation = {
      camper_id: this.state.camperId,
      campsite_id: this.state.campsiteId,
      start_date: this.state.startDate.format('YYYY/MM/DD'),
      end_date: this.state.endDate.format('YYYY/MM/DD')
    }
    // debugger
    if (this.props.currentUserId) {
      this.props.createReservation(reservation)
        .then(this.props.history.push(`/users/${this.state.camperId}`));
    } else {
      this.props.openModal({window: 'login'});
    }
  }

  isHighlighted(day) {
    return day.isSame(this.state.startDate)
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value})
  }

  render() {
    // debugger
    return (
      <form className="reservation-form" onSubmit={this.handleSubmit}>
        <div className="date-picker-input-container">
          <SingleDatePicker
            placeholder="Check in"
            date={this.state.startDate}
            onDateChange={startDate => this.setState({ startDate })}
            focused={this.state.focusedStart}
            numberOfMonths={1}
            verticalSpacing={0}
            noBorder={true}
            daySize={36}
            hideKeyboardShortcutsPanel
            onFocusChange={({ focused }) => this.setState({ focusedStart: focused })}
            id="res_start_date"
          />
          <SingleDatePicker
            placeholder="Check out"
            date={this.state.endDate}
            onDateChange={endDate => this.setState({ endDate })}
            focused={this.state.focusedEnd}
            isDayHighlighted={day => this.isHighlighted(day)}
            numberOfMonths={1}
            verticalSpacing={0}
            noBorder={true}
            daySize={36}
            hideKeyboardShortcutsPanel
            onFocusChange={({ focused }) => this.setState({ focusedEnd: focused })}
            id="res_end_date"
          />
        </div>
        <button className="reservation-button">Book now</button>
      </form>
    )
  }
}

export default withRouter(ReservationForm);

{/* <label>Start date
          <input type="date" min={today} onChange={this.update('startDate')} />
</label> */}

{/* <input type="submit" value="Submit" /> */}