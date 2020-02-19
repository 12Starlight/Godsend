// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Search from './search';
import { stocks } from '../../../reducers/stock_data/stock_data';


// mapStateToProps
const mapStateToProps = (state) => ({
  stocks: stocks
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Search); 