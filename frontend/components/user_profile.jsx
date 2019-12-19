import React from 'react';
import UserPanes from './user_panes';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUser(this.props.currentUser.id)
      .then(this.props.fetchCampsites())
      .then(this.props.fetchReservations());
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  render() {
    if (this.props.currentUser && this.props.reservations && this.props.campsites) {
      const { currentUser, reservations, campsites, openModal, reviews } = this.props;
      
      return (
        <div className="profile-container">
          <div className="profile-panels">
            <section className="side-panel">
              <div className="user-panel">
                <h1>{currentUser.first_name} {currentUser.last_name[0]}.</h1>
                <h3>Campster member since {this.formatDate(currentUser.created_at)}</h3>
              </div>
              <div className="campster-cash-panel">

              </div>
            </section>
            <UserPanes
              currentUser={currentUser}
              reservations={reservations}
              campsites={campsites}
              openModal={openModal}
              reviews={reviews} />
          </div>
        </div>
      )
    } else {
      return null
    };
  }
}

export default UserProfile;