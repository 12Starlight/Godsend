// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Also from './also';
import { givePeopleAlsoBought } from '../../../../actions/stock_actions';
import { giveAlsoStockStats } from '../../../../actions/also_actions';


// mapStateToProps
const mapStateToProps = (state) => {
  // debugger; 

  return {
    alsoBought: state.entities.stock.recommendId, // array of tickers
    alsoStats: Object.values(state.entities.also) // array of stat objects
  }
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  givePeopleAlsoBought: (searchTerm) => dispatch(givePeopleAlsoBought(searchTerm)),
  giveAlsoStockStats: (searchTerm) => dispatch(giveAlsoStockStats(searchTerm))
});


export default connect(mapStateToProps, mapDispatchToProps)(Also);





