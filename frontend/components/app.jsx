import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';

const App = (props) => {
  return(
    <>
      <h1>React is working!!!</h1>
      <Route path="/login" component={LoginFormContainer} />
    </>
  );
};

export default App;