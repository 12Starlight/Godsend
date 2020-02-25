// Import React Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import { merge } from 'lodash'

// Import Local Directory Files
import About from './about';
import { giveMeMyStock, giveMeMyStockStats } from '../../../../actions/stock_actions';


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  // let stock = state.entities.stock.stockSymbol
  
  // if (stock) {
  //   stock = merge({}, stock);
  // }
  // debugger; 
  return {
    stock: state.entities.stock.stockSymbol,
    stockStats: state.entities.stock.stockStats
  }
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  // const ticker = ownProps.match.params.ticker;

  return  {
    giveMeMyStock: (searchTerm) => dispatch(giveMeMyStock(searchTerm)),
    giveMeMyStockStats: (searchTerm) => dispatch(giveMeMyStockStats(searchTerm))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(About); 