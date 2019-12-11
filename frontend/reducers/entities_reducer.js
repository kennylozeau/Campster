import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import campsitesReducer from './campsites_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  campsites: campsitesReducer
});

export default entitiesReducer;