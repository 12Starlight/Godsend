// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import session from './session_errors_reducer';


const errorsReducer = combineReducers({
  session
});


export default errorsReducer; 