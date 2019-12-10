import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import NavBar from './navbar';
import Modal from './modal';

const App = (props) => {
  return(
    <>
      <Modal />
      <NavBar />
      <Route path="/login" component={LoginFormContainer} />
    </>
  );
};

export default App;