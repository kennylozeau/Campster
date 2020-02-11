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
      campsiteId: this.props.match.params.campsiteId,
      startDate: null,
      endDate: null,
      focusedStart: null,
      focusedEnd: null
    }

    this.handleSubmit= this.handleSubmit.bind(this);
    this.checkValidDate = this.checkValidDate.bind(this);
    this.isHighlighted = this.isHighlighted.bind(this);
  }

  checkValidDate(endDate) {
    let numDays = Math.round((this.state.startDate - endDate) / (60 * 60 * 24 * 1000));
    if (numDays >= 0) {
      this.setState({ focusedStart: true, startDate: null });
    } else {
      this.setState({ endDate })
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.currentUserId) {
      if (this.state.startDate === null) {
        this.setState({ focusedStart: true });
        return
      }

      if (this.state.endDate === null) {
        this.setState({ focusedEnd: true });
        return
      }

      const reservation = {
        camper_id: this.props.currentUserId,
        campsite_id: this.state.campsiteId,
        start_date: this.state.startDate.format('YYYY/MM/DD'),
        end_date: this.state.endDate.format('YYYY/MM/DD')
      }

      this.props.createReservation(reservation)
        .then(this.props.history.push(`/users/${this.props.currentUserId}`));
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

    let price = this.props.price;
    let subtotal = null;
    let numDays;
    let cost;
    let klass = "";

    if (this.state.startDate && this.state.endDate) {
      klass = "long"
      numDays = Math.round(Math.abs((this.state.startDate - this.state.endDate) / (60 * 60 * 24 * 1000)));
      cost = numDays * price
      subtotal = <h3 className="subtotal">Total cost: ${cost}</h3>;
    }

    let button = <button className="reservation-button">Log In</button>;

    if (this.props.currentUserId) {
      button = <button className="reservation-button">Book now</button>
    }

    return (
      <div className={`res-widget ${klass}`}>
        <h1>${price}</h1>
        <h3>per night</h3>
        <form className="reservation-form" onSubmit={this.handleSubmit}>
          <div className="date-picker-input-container">
            <SingleDatePicker
              placeholder="Check in"
              date={this.state.startDate}
              onDateChange={startDate => this.setState({ startDate, endDate: null, focusedEnd: true })}
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
              onDateChange={endDate => this.checkValidDate(endDate)}
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
          {subtotal}
          {button}
        </form>
      </div>
    )
  }
}

export default withRouter(ReservationForm);

{/* <label>Start date
          <input type="date" min={today} onChange={this.update('startDate')} />
</label> */}

{/* <input type="submit" value="Submit" /> */}