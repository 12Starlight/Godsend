// Import Local Directory Files
import * as StockApiUtil from '../utils/stock_api_util';

// Constants
export const GET_MY_STOCK = 'GET_MY_STOCK';
export const GET_MY_STOCK_NEWS = 'GET_MY_STOCK_NEWS';
export const GET_MY_STOCK_RATINGS = 'GET_MY_STOCK_RATINGS';
export const GET_MY_STOCK_EARNINGS = 'GET_MY_STOCK_EARNINGS';
export const PEOPLE_ALSO_BOUGHT = 'PEOPLE_ALSO_BOUGHT';
export const STOCK_ERRORS = 'STOCK_ERRORS';


// Regular Action Creators
const gotStock = (stock) => ({
  type: GET_MY_STOCK,
  stock
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

const gotRecommendations = (recomendations) => ({
  type: PEOPLE_ALSO_BOUGHT,
  recomendations
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
    peopleAlsoBoughtReturned => dispatch(getRecommendations(peopleAlsoBoughtReturned)),
    stockErrors => dispatch(gotStockErrors(stockErrors))
  )
);

export const gotStock = (stockSearch) => (
  giveMeMyStock(stockSearch),
  giveMeMyStockNews(stockSearch),
  giveMeMyStockRatings(stockSearch),
  giveMeMyStockEarnings(stockSearch),
  giveMePeopleAlsoBought(stockSearch)
);

