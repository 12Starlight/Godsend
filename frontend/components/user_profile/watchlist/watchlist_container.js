// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import WatchList from './watchlist';
import { getWatchListSecurities } from '.././../../actions/watchlist_security_actions';


// mapStateToProps
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  getWatchListSecurities: () => dispatch(getWatchListSecurities())
})


export default connect(mapStateToProps, mapDispatchToProps)(WatchList);   