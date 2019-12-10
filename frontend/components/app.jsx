import React from 'react';
import { Route, Link } from 'react-router-dom';
import Test from './test';

const App = (props) => {
  return(
    <>
      <h1>React is working!!!</h1>
      <Route path="/login" component={Test} />
    </>
  );
};

export default App;