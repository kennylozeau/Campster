import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import NavBarContainer from './navbar_container';
import Modal from './modal';

const App = (props) => {
  return(
    <>
      <Modal />
      <div className="navbar-container"><NavBarContainer /></div>
      <Route path="/login" component={LoginFormContainer} />
    </>
  );
};

export default App;