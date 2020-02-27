// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import AlsoItem from './also_item';


// mapStateToProps 
const mapStateToProps = (state) => {
  let itemStats = state.entities.stock.stockStats;
  
  if (itemStats) {
    itemStats = Object.assign({}, itemStats)
  }

  return {
  itemStats: itemStats
}}

// mapDispatchToProps 
const mapDispatchToProps = (dispatch, ownProps) => {
  // let searchTerm = ownProps.bought

  return {
    giveMeMyStockStats: (searchTerm) => dispatch(giveMeMyStockStats(searchTerm))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AlsoItem)