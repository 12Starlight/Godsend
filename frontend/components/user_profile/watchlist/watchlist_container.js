// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import WatchList from './watchlist';
import { giveAlsoStockStats } from '../../../actions/also_actions';


// mapStateToProps
const mapStateToProps = (state) => {
  // debugger; 
  return {
    // watchlistSecurities: Object.keys(state.entities.watchlists).map((key) => {
    //   let newObj = {};
    //   newObj[key] = state.entities.watchlists[key].ticker
    //   return newObj; 
    // }),
    watchlistSecurities: Object.values(state.entities.watchlists),

    alsoStats: state.entities.also
  }
}

const mapDispatchToProps = (dispatch) => ({
  giveAlsoStockStats: (searchTerm) => dispatch(giveAlsoStockStats(searchTerm))
})


export default connect(mapStateToProps, mapDispatchToProps)(WatchList);   