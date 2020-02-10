import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('content');

  // Tesing code on the window
  window.dispatch = store.dispatch;
  window.getState = store.getState; 


  // ReactDOM.render(<div>HI REACT HERE</div>, root);
  ReactDOM.render(<Root store={store} />, root);
}); 