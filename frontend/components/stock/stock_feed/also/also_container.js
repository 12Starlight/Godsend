// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Also from './also';
import { givePeopleAlsoBought, giveMeMyStockStats } from '../../../../actions/stock_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  alsoBought: state.entities.stock.recommendId
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  givePeopleAlsoBought: (searchTerm) => dispatch(givePeopleAlsoBought(searchTerm))
});


export default connect(mapStateToProps, mapDispatchToProps)(Also);





