// Import Local Directory Files
import * as StockApiUtil from '../utils/stock_api_util';

// Constants
export const GET_MY_STOCK = 'GET_MY_STOCK';
export const GET_MY_STOCK_STATS = 'GET_MY_STOCK_STATS'; 
export const GET_MY_STOCK_NEWS = 'GET_MY_STOCK_NEWS';
export const GET_MY_STOCK_RATINGS = 'GET_MY_STOCK_RATINGS';
export const GET_MY_STOCK_EARNINGS = 'GET_MY_STOCK_EARNINGS';
export const PEOPLE_ALSO_BOUGHT = 'PEOPLE_ALSO_BOUGHT';
export const STOCK_ERRORS = 'STOCK_ERRORS';
export const WIPE_OUT_STOCK = 'WIPE_OUT_STOCK';


// Regular Action Creators
const gotStock = (stock) => ({
  type: GET_MY_STOCK,
  stock
});

const gotStockStats = (stats) => ({
  type: GET_MY_STOCK_STATS,
  stats
});

const gotStockNews = (stockNews) => ({
  type: GET_MY_STOCK_NEWS,
  stockNews
});

const gotStockRatings = (stockRatings) => ({
  type: GET_MY_STOCK_RATINGS,
  stockRatings 
});

const gotStockEarnings = (stockEarnings) => ({
  type: GET_MY_STOCK_EARNINGS,
  stockEarnings 
});

const gotRecommendations = (recommendations) => ({
  type: PEOPLE_ALSO_BOUGHT,
  recommendations
});

const gotStockErrors = (stockErrors) => ({
  type: STOCK_ERRORS,
  stockErrors
});

// Thunk Action Creators
export const giveMeMyStock = (stockSearch) => (dispatch) => (
  StockApiUtil.giveMeMyStock(stockSearch).then(
    stockReturned => dispatch(gotStock(stockReturned)),
    stockErrors => dispatch(gotStockErrors(stockErrors))
  )
);

export const giveMeMyStockStats = (stockSearch) => (dispatch) => (
  StockApiUtil.giveMeMyStockStats(stockSearch).then(
    stockStatsReturned => dispatch(gotStockStats(stockStatsReturned)),
    stockErrors => dispatch(gotStockErrors(stockErrors))
  )
);

export const giveMeMyStockNews = (stockSearch) => (dispatch) => (
  StockApiUtil.giveMeMyStockNews(stockSearch).then(
    stockNewsReturned => dispatch(gotStockNews(stockNewsReturned)),
    stockErrors => dispatch(gotStockErrors(stockErrors))
  )
);

export const giveMeMyStockRatings = (stockSearch) => (dispatch) => (
  StockApiUtil.giveMeMYStockRatings(stockSearch).then(
    stockRatingsReturned => dispatch(gotStockRatings(stockRatingsReturned)),
    stockErrors => dispatch(gotStockErrors(stockErrors))
  )
);

export const giveMeMyStockEarnings = (stockSearch) => (dispatch) => (
  StockApiUtil.giveMeMyStockEarnings(stockSearch).then(
    stockEarningsReturned => dispatch(gotStockEarnings(stockEarningsReturned)),
    stockErrors => dispatch(gotStockErrors(stockErrors))
  )
);

export const givePeopleAlsoBought = (stockSearch) => (dispatch) => (
  StockApiUtil.givePeopleAlsoBought(stockSearch).then(
    peopleAlsoBoughtReturned => dispatch(gotRecommendations(peopleAlsoBoughtReturned)),
    stockErrors => dispatch(gotStockErrors(stockErrors))
  )
);


