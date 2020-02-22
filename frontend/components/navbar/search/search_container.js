// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Search from './search';
import { stocks } from '../../../reducers/stock_data/stock_data';
import {
  giveMeMyStock,
  giveMeMyStockNews,
  giveMeMyStockRatings,
  giveMeMyStockEarnings,
  givePeopleAlsoBought
} from '../../../actions/stock_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  stocks: stocks
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  giveMeMyStock: (stockSearch) => dispatch(giveMeMyStock(stockSearch)),
  giveMeMyStockEarnings: (stockSearch) => dispatch(giveMeMyStockNews(stockSearch)),
  giveMeMyStockRatings: (stockSearch) => dispatch(giveMeMyStockRatings(stockSearch)),
  giveMeMyStockEarnings: (stockSearch) => dispatch(giveMeMyStockEarnings(stockSearch)),
  givePeopleAlsoBought: (stockSearch) => dispatch(givePeopleAlsoBought(stockSearch))
});


export default connect(mapStateToProps, mapDispatchToProps)(Search); 