// Import Local Dierctory Files
import * as StockApiUtil from '../utils/stock_api_util';

// Constants
export const GET_ALSO_STOCK_STATS = 'GOT_ALSO_STOCK_STATS';
export const ALSO_ERRORS = 'ALSO_ERRORS';


// Regular Action Creators
const gotAlsoStockStats = (stats) => ({
  type: GET_ALSO_STOCK_STATS,
  company: stats.companyName,
  symbol: stats.symbol,
  latestPrice: stats.latestPrice,
  changePercent: stats.changePercent
});

const gotAlsoErrors = (errors) => ({
  type: ALSO_ERRORS,
  errors
})

// Thunk Action Creators
export const giveAlsoStockStats = (stockSearch) => (dispatch) => (
  StockApiUtil.giveMeMyStock(stockSearch).then(
    alsoStatsReturned => dispatch(gotAlsoStockStats(alsoStatsReturned)),
    stockErrors => dispatch(gotStockErrors(stockErrors))
  )
);

