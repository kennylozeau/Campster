import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import NavBarContainer from './navbar_container';
import Modal from './modal';
import CampsiteIndexContainer from './campsite_index_container';
import CampsiteMap from './campsite_map';

const App = (props) => {
  return(
    <>
      <Modal />
      <div className="navbar-container"><NavBarContainer /></div>


      {/* <Route path="/login" component={LoginFormContainer} /> */}
      {/* <Route path="/discover" component={CampsiteIndexContainer} /> */}
      <Route exact path="/" component={CampsiteIndexContainer} />
      {/* <CampsiteMap /> */}
    </>
  );
};

export default App;