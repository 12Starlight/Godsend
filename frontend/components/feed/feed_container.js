// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Feed from './feed';


// mapStateToProps 
const mapStateToProps = (state) => ({
  news: state.entities.news
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Feed); 