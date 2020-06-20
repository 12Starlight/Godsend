// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Navbar from './navbar';
import { signOut } from '../../actions/session_actions';


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  // debugger; 
  return {
    userId: state.session.id
  }
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})


export default connect(mapStateToProps, mapDispatchToProps)(Navbar); 