// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import WatchList from './watchlist';
import { getWatchListSecurities } from '.././../../actions/watchlist_security_actions';
import { giveAlsoStockStats } from '../../../actions/also_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  watchlistSecurities: state.entities.watchlists
})

const mapDispatchToProps = (dispatch) => ({
  getWatchListSecurities: () => dispatch(getWatchListSecurities()),
  giveAlsoStockStats: (searchTerm) => dispatch(giveAlsoStockStats(searchTerm))
})


export default connect(mapStateToProps, mapDispatchToProps)(WatchList);   