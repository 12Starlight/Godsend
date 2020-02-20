// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Feed from './feed';
import { receiveAllNews } from '../../actions/feed_actions';
import { convert } from '../../reducers/selectors/selectors';


// mapStateToProps 
const mapStateToProps = (state, ownProps) => ({
  news: state.entities.news, 
  convert: convert 
});
  // debugger; 
//   news: state.entities.news 
// };

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  receiveAllNews: () => dispatch(receiveAllNews())
});


export default connect(mapStateToProps, mapDispatchToProps)(Feed); 