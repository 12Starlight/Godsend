// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import sessionErrorsReducer from './session_errors_reducer';


const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});


export default errorsReducer; 