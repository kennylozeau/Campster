import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// IMPORTS FOR TESTING
// import { signup, login, logout } from './actions/session_actions';
// import { fetchCampsites, fetchCampsite } from './actions/campsite_actions';
// import { fetchReservations, createReservation, updateReservation, cancelReservation } from './actions/reservation_actions';
// import { createReview } from './actions/review_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);

  // FOR TESTING PURPOSES ONLY
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.fetchCampsites = fetchCampsites;
  // window.fetchCampsite = fetchCampsite;
  // window.fetchReservations = fetchReservations;
  // window.createReservation = createReservation;
  // window.updateReservation = updateReservation;
  // window.cancelReservation = cancelReservation;
  // window.createReview = createReview;
});