// Import React Redux
import React from 'react';
import { Link } from 'react-router-dom';
import errorsReducer from '../../reducers/errors_reducer';

// Import Local Directory Files
import NavbarContainer from '../navbar/navbar_container'
import FeedContainer from '../feed/feed_container';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { user, signOut, userId } = this.props; 

    return (
      <div className='user_outer_container' >
        <NavbarContainer userId={userId} />
        <div className="user_container">
          <div className='user'>
            <FeedContainer signOut={signOut} />
            <div className='watchlist_container'>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default UserProfile; 


// <div>{user.first_name}</div>
// <div>{user.last_name}</div>
// <div>{user.email}</div>
// <div>{user.username}</div>
// <button className='button' onClick={signOut} >Sign Out</button>