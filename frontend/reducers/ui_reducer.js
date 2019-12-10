import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
  modal: modalReducer
});

export default rootReducer;