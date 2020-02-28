// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import StockFeed from './stock_feed';
import { giveMeMyStockRatings, giveMeMyStockEarnings, givePeopleAlsoBought } from '../../../actions/stock_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  stockRatings: state.entities.stock.ratingId,
  stockEarnings: state.entities.stock.earningsSymbol
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  giveMeMyStockRatings: (searchTerm) => dispatch(giveMeMyStockRatings(searchTerm)),
  giveMeMyStockEarnings: (searchTerm) => dispatch(giveMeMyStockEarnings(searchTerm)),
  givePeopleAlsoBought: (searchTerm) => dispatch(givePeopleAlsoBought(searchTerm))
});


export default connect(mapStateToProps, mapDispatchToProps)(StockFeed);