// Import React Redux
import { merge } from 'lodash';

// Import Local Directory Files
import { GET_ALL_NEWS } from '../actions/news_actions';


const newsReducer = (oldState = [], action) => {
  // debugger; 
  Object.freeze(oldState);

  switch(action.type) {
    case GET_ALL_NEWS:
        return [...action.news ]
    default:
      return oldState; 
  }
} 


export default newsReducer;