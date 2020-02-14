// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer
});


export default entitiesReducer; 