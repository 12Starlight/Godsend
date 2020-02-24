// Import React Redux
import { connect } from 'react-redux'

// Import Local Directory Files
import Chart from './chart';


// mapStateToProps
const mapStateToProps = (state) => ({
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  giveMeMyStock: (searchTerm) => dispatch(giveMeMyStock(searchTerm))
});


export default connect(mapStateToProps, mapDispatchToProps)(Chart); 


