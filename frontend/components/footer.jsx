import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const Footer = (props) => {
  return (
    <footer className="nav-footer">
      <h2>&copy; 2019 Campster, Inc. All rights reserved.</h2>
      <div>ICONS</div>
    </footer>
  );
};

export default Footer;