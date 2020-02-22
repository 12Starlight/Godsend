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

const getStockEarnings = (stockEarnings) => ({
  type: GET_MY_STOCK_EARNINGS,
  stockEarnings 
});

const getRecommendations = (recomendations) => ({
  type: PEOPLE_ALSO_BOUGHT,
  recomendations
});

const getStockErrors = (stockErrors) => ({
  type: STOCK_ERRORS,
  stockErrors
});