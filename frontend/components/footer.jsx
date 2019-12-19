import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const Footer = (props) => {
  return (
    <footer className="nav-footer">
      <h2>&copy; 2019 Campster, Inc. All rights reserved.</h2>
      <div>
        <a href="https://github.com/kennylozeau/campster" className='login github' >GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;