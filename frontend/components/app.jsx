import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import NavBar from './navbar';

const App = (props) => {
  return(
    <>
      <NavBar />
      <Route path="/login" component={LoginFormContainer} />
    </>
  );
};

export default App;