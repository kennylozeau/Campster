import React from 'react';

const TripsPane = ({ props }) => {
  
  const { currentUser, reservations, campsites } = props;
  const reservationsList = reservations.map(reservation => {
    if (reservation.camper_id === currentUser.id) {
      return (
        <li key={Math.floor(Math.random() * 9999)} className="reservation-list-item">
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
  );
};

export default TripsPane;