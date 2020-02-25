// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import StockNews from './stock_news';
import { giveMeMyStockNews } from '../../../../actions/stock_actions';
import { convert } from '../../../../reducers/selectors/selectors';


// mapStateToProps
const mapStateToProps = (state) => ({
  stockNews: state.entities.stock.newsId,
  convert: convert
});

const mapDispatchToProps = (dispatch) => ({
  giveMeMyStockNews: (searchTerm) => dispatch(giveMeMyStockNews(searchTerm))
});


export default connect(mapStateToProps, mapDispatchToProps)(StockNews);