import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dropDown: "hidden"
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleNearBy = this.handleNearBy.bind(this);
    this.showLocation = this.showLocation.bind(this);
    this.showError = this.showError.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(this.mouseLeave());
  }

  handleNearBy() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showLocation, this.showError);
    } else {
      this.props.history.push({
        pathname: '/discover',
        search: `?lat=40.701982&lng=-73.9151944`
      });
    }
  }

  showLocation(position) {
    let { latitude, longitude } = position.coords;
    this.props.history.push({
      pathname: '/discover',
      search: `?lat=${latitude}&lng=${longitude}`
    });
  }

  showError(error) {
    this.props.history.push({
      pathname: '/discover',
      search: `?lat=40.701982&lng=-73.9151944`
    });
  }

  mouseEnter() {
    this.setState({dropDown: ""});
  }

  mouseLeave() {
    this.setState({ dropDown: "hidden" });
  }

  render() {
    if (this.props.currentUser) {
      const { currentUser } = this.props;
      return (
        <nav className="nav-header">
          <div className={`${this.state.dropDown} dropdown-screen`}></div>
          <h2 id="logo"><a href="/" >CAMPSTER</a></h2>
          <div className="user-nav-dropdown-wrapper" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <img src={window.iconURL} className="user-nav-dropdown-icon" />
            <ul className={`${this.state.dropDown} dropdown-menu`}>
              <li className="dropdown-btn" onClick={this.mouseLeave} >
                <Link to={`/users/${currentUser.id}`}>Manage account</Link>
              </li>
              <li className="dropdown-btn" >
                <Link to="#" disabled>Become a Host</Link>
              </li>
              <li className="dropdown-btn" >
                <Link to="#" disabled>Refer Hosts</Link>
              </li>
              <li className="dropdown-btn" >
                <Link to="#" disabled>About Campster</Link>
              </li>
              <li className="dropdown-btn" onClick={() => this.handleLogout()}>
                <Link to="#" disabled>Log out</Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="nav-header">
          <h2 id="logo"><Link to="/">CAMPSTER</Link></h2>
          <div>
            <button className="login" onClick={() => this.handleNearBy()}>Near Me</button>
            <button className="login" >Become a Host</button>
            <button className="login" >About</button>
            <button className="login" >Earn Campcash</button>
            <button className="login" onClick={() => this.props.openModal({window: 'login'})}>Log in</button>
            <button className="signup" onClick={() => this.props.openModal({window: 'signup'})}>Sign up</button>
          </div>
        </nav>
      );
    }
  }
};

export default withRouter(NavBar);

// PREVIOUS FUNCTIONING LINKS
/* <a href="/" className="logout" onClick={props.logout}>Log out</a>
<a href="#" className="login" onClick={() => props.openModal('login')}>Log in</a>
<a href="#" className="signup" onClick={() => props.openModal('signup')}>Sign up</a> */

// <button className="logout" onClick={() => handleLogout()}>Log out</button>