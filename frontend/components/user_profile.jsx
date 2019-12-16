import React from 'react';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReservations();
  }

  render() {
    if (this.props.currentUser) {
      const { currentUser, reservations } = this.props;
      const reservationsList = reservations.map(reservation => {
        if (reservation.camper_id === currentUser.id) {
          return (
            <li key={reservation.id} >{reservation.campsite_id} {reservation.start_date} through {reservation.end_date}</li>
          );
        } else {
          return (
            null
          );
        };
      });

      return (
        <div className="profile-container">
          <div className="profile-panels">
            <section className="side-panel">
              <div className="user-panel">
                <h1>{currentUser.first_name} {currentUser.last_name[0]}</h1>
                <h3>Campster member since {currentUser.created_at}</h3>
              </div>
              <div className="campster-cash-panel">

              </div>
            </section>
            <section className="main-panel">
              {reservationsList}
            </section>
          </div>
        </div>
      )
    } else {
      return null
    };
  }
}

export default UserProfile;