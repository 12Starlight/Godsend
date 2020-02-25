// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import StockNews from './stock_news';
import { giveMeMyStockNews } from '../../../../actions/stock_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  stockNews: state.entities.stock.stockNews
});

const mapDispatchToProps = (dispatch) => ({
  giveMeMyStockNews: (searchTerm) => dispatch(giveMeMyStockNews(searchTerm))
});


export default connect(mapStateToProps, mapDispatchToProps)(StockNews);