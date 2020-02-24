// Import React Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import { merge } from 'lodash'

// Import Local Directory Files
import About from './about';


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  let stock = state.entities.stock.stockSymbol
  
  // if (stock) {
  //   stock = merge({}, stock);
  // }

  return {
    stock: stock
  }
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => {
  // const ticker = ownProps.match.params.ticker;

  return  {
    giveMeMyStock: (searchTerm) => dispatch(giveMeMyStock(searchTerm))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(About); 