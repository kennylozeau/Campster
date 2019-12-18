import React from 'react';
import UserPanes from './user_panes';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampsites()
      .then(this.props.fetchReservations());
  }

  render() {
    if (this.props.currentUser && this.props.reservations && this.props.campsites) {
      const { currentUser, reservations, campsites, openModal } = this.props;
      
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
            <UserPanes
              currentUser={currentUser}
              reservations={reservations}
              campsites={campsites}
              openModal={openModal} />
          </div>
        </div>
      )
    } else {
      return null
    };
  }
}

export default UserProfile;