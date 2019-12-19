import React from 'react';
import { render } from 'react-dom';

class TripsPane extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(reservation) {
    this.props.props.openModal({ action: 'review', data: {reservationId: reservation.id, campsiteId: reservation.campsite_id}});
  }

  render() {
    
    const { currentUser, reservations, campsites } = this.props.props;

    const reservationsList = reservations.map(reservation => {
      if (reservation.camper_id === currentUser.id) {
        return (
          <li
            key={Math.floor(Math.random() * 9999)}
            className="reservation-list-item"
            onClick={() => this.handleClick(reservation)}>
            <h1>{campsites[reservation.campsite_id].name}</h1>
            <h2>{reservation.start_date} through {reservation.end_date}</h2>
          </li>
        );
      } else {
          return (
            null
          );
        };
      });


    return (
      <>
        {reservationsList}
      </>
    )
  }
}

export default TripsPane;