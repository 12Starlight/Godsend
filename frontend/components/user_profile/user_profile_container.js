// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import UserProfile from './user_profile';
import { signOut } from '../../actions/session_actions';
import { getWatchListSecurities } from '../../actions/watchlist_security_actions';


// mapStateToProps
const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  userId: ownProps.match.params.awesome,
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  getWatchListSecurities: () => dispatch(getWatchListSecurities())
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile); 