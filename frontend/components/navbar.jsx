import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const NavBar = (props) => {

  if (props.currentUser) {
    return (
      <nav>
        <h2 id="logo">CAMPSTER</h2>
        <div>
          <a href="/" className="logout" onClick={props.logout}>Log out</a>
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <h2 id="logo">CAMPSTER</h2>
        <div>
          <button className="login" onClick={() => props.openModal('login')}>Log in</button>
          <button className="signup" onClick={() => props.openModal('signup')}>Sign up</button>
        </div>
      </nav>
    );
  }

};

export default NavBar;

// PREVIOUS FUNCTIONING LINKS
/* <a href="#" className="logout" onClick={props.logout}>Log out</a>
<a href="#" className="login" onClick={() => props.openModal('login')}>Log in</a>
<a href="#" className="signup" onClick={() => props.openModal('signup')}>Sign up</a> */