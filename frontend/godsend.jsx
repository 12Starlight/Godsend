// Import React Redux
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Import Local Directory Files
import { signOut, signIn } from './actions/session_actions';
// import { receiveWatchlists, receiveWatchlist, createWatchlist, deleteWatchlist } from './utils/watchlists_api_util';
import { getWatchListSecurities, getWatchListSecurity, createWatchListSecurity, trashWatchListSecurity } from './actions/watchlist_security_actions';
import { receiveAllNews } from './actions/news_actions';
import { receiveAllSectors } from './actions/sectors_actions';
import { 
  giveMeMyStock, 
  giveMeMyStockStats,
  giveMeMyStockNews, 
  giveMeMyStockRatings,
  giveMeMyStockEarnings,
  givePeopleAlsoBought
} from './actions/stock_actions';
import { addedSecurity, removedSecurity } from './actions/security_actions';



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
  window.getWatchListSecurities = getWatchListSecurities;
  window.getWatchListSecurity = getWatchListSecurity;
  window.createWatchListSecurity = createWatchListSecurity;
  window.trashWatchListSecurity = trashWatchListSecurity; 
  window.receiveAllNews = receiveAllNews;
  window.receiveAllSectors = receiveAllSectors; 
  window.giveMeMyStock = giveMeMyStock;
  window.giveMeMyStockStats = giveMeMyStockStats; 
  window.giveMeMyStockNews = giveMeMyStockNews;
  window.giveMeMyStockRatings = giveMeMyStockRatings;
  window.giveMeMyStockEarnings = giveMeMyStockEarnings;
  window.givePeopleAlsoBought = givePeopleAlsoBought;
  window.addedSecurity = addedSecurity; 
  window.removedSecurity = removedSecurity; 


  // ReactDOM.render(<div>HI REACT HERE</div>, root);
  ReactDOM.render(<Root store={store} />, root);
}); 