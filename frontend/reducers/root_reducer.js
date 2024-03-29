// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import entities from './entities_reducer';
import session from './session_reducer'; 
import errors from './errors_reducer';


const rootReducer = combineReducers({
  entities,
  session,
  errors 
});


export default rootReducer; 

