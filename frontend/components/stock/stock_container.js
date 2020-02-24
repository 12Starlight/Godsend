// Import React Redux
import { connect } from 'react-redux'; 

// Import Local Directory Files
import Stock from './stock';
import { giveMeMyStock } from '../../actions/stock_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  stock: state.entities.stock
});

const mapDispatchToProps = (dispatch) => ({
  giveMeMyStock: (searchTerm) => dispatch(giveMeMyStock(searchTerm))
})


export default connect(mapStateToProps, mapDispatchToProps)(Stock); 