import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h2 id="logo">CAMPSTER</h2>
      <div>
        <Link className="login" to="/login">Log in</Link>
        <Link className="signup" to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default NavBar;