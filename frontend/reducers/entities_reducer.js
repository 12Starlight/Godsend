// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
  user: usersReducer
});


export default entitiesReducer; 