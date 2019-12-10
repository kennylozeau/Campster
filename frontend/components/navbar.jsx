import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const NavBar = () => {
  return (
    <nav>
      <h2 id="logo">CAMPSTER</h2>
      <div>
        <a href="#" className="login" onClick={() => dispatch(openModal('login'))}>Log in</a>
        <Link className="login" to="/login">Log in</Link>
        <Link className="signup" to="/signup">Sign Up</Link>
        <button onClick={() => dispatch(openModal('login'))}>
          Log in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;