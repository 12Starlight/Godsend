// Import React Redux
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Import Local Directory Files
import { signOut, signIn } from './actions/session_actions';
// import { receiveWatchlists, receiveWatchlist, createWatchlist, deleteWatchlist } from './utils/watchlists_api_util';
import { getWatchlists, getWatchlist, createWatchlist, trashWatchlist } from './actions/watchlist_actions';

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
  window.signOut = signOut; 
  window.signIn = signIn;
  window.getWatchlists = getWatchlists;
  window.getWatchlist = getWatchlist;
  window.createWatchlist = createWatchlist;
  window.trashWatchlist = trashWatchlist; 


  // ReactDOM.render(<div>HI REACT HERE</div>, root);
  ReactDOM.render(<Root store={store} />, root);
}); 