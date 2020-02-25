// Import React Redux
import { connect } from 'react-redux'

// Import Local Directory Files
import Chart from './chart';


// mapStateToProps
const mapStateToProps = (state) => ({
  stock: state.entities.stock.stockSymbol,
  stockStats: state.entities.stock.stockStats 
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  giveMeMyStock: (searchTerm) => dispatch(giveMeMyStock(searchTer))
});


export default connect(mapStateToProps, mapDispatchToProps)(Chart); 


