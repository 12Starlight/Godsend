// Import React Redux
import { connect } from 'react-redux'; 

// Import Local Directory Files
import Stock from './stock';
import { 
  giveMeMyStock, 
  giveMeMyStockNews,
  giveMeMyStockRatings,
  giveMeMyStockEarnings,
  givePeopleAlsoBought
} from '../../actions/stock_actions';
import { addedSecurity, removedSecurity } from '../../actions/security_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  stock: state.entities.stock,
  securities: state.entities.securities
});

const mapDispatchToProps = (dispatch) => ({
  giveMeMyStock: (searchTerm) => dispatch(giveMeMyStock(searchTerm)),
  giveMeMyStockNews: (searchTerm) => dispatch(giveMeMyStockNews(searchTerm)),
  giveMeMyStockRatings: (searchTerm) => dispatch(giveMeMyStockRatings(searchTerm)),
  giveMeMyStockEarnings: (searchTerm) => dispatch(giveMeMyStockEarnings(searchTerm)),
  givePeopleAlsoBought: (searchTerm) => dispatch(givePeopleAlsoBought(searchTerm)),
  addedSecurity: (security) => dispatch(addedSecurity(security)),
  removedSecurity: (securityId) => dispatch(removedSecurity(securityId))
});


export default connect(mapStateToProps, mapDispatchToProps)(Stock); 