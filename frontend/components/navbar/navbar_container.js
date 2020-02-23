// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Navbar from './navbar';


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  // debugger; 
  return {
    userId: state.session.id 
  }
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Navbar); 