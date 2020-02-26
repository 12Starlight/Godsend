// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import StockFeed from './stock_feed';
import { giveMeMyStockRatings } from '../../../actions/stock_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  stockRatings: state.entities.stock.ratingId
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  giveMeMyStockRatings: (searchTerm) => dispatch(giveMeMyStockRatings(searchTerm))
});


export default connect(mapStateToProps, mapDispatchToProps)(StockFeed);