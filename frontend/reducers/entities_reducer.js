import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import campsitesReducer from './campsites_reducer';
import reservationsReducer from './reservations_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  campsites: campsitesReducer,
  reservations: reservationsReducer
});

export default entitiesReducer;