// Import React Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 

// Import Local Directory Files
import About from './about';


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  let stock = state.entities.stock
  
  if (stock) {
    stock = Object.assign({}, stock);
  }

  return {
    stock: stock,
    ticker: ownProps.match.params.ticker   
  }
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => {
  const ticker = ownProps.match.params.ticker;

  return  {
    giveMeMyStock: () => dispatch(giveMeMyStock(ticker))
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About)); 