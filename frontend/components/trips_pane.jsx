import React from 'react';

const TripsPane = ({ props }) => {
  
  const { currentUser, reservations } = props;
  const reservationsList = reservations.map(reservation => {
    if (reservation.camper_id === currentUser.id) {
      return (
        <li key={Math.floor(Math.random() * 9999)} >{reservation.campsite_id} {reservation.start_date} through {reservation.end_date}</li>
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