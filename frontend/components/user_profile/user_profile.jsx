// Import React Redux
import React from 'react';
import { Link, Route } from 'react-router-dom';
// import { ReactBasicScroll } from 'react-basic-scroll'; 

// Import Local Directory Files
import NavbarContainer from '../navbar/navbar_container'
import FeedContainer from '../feed/feed_container'; //
import WatchlistContainer from './watchlist/watchlist_container';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWatchListSecurities(); 
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.getWatchListSecurities(); 
      this.props.history.push(`/users/${this.props.match.params.awesome}`)
    }
  }


  render() {
    const { user, signOut, userId } = this.props; 

    // const config = {
    //   from: 'top-top',
    //   to: 'bottom-bottom',
    //   props: {
    //     '--opacity': {
    //       from: 0.1,
    //       to: 0.99
    //     }
    //   }
    // };

    return (
      // <ReactBasicScroll config={config} >
      <div className='user_outer_container' >
        <NavbarContainer userId={userId} />
        <div className="user_container">
          <div className='user'>
            <FeedContainer signOut={signOut} />
            <WatchlistContainer />
          </div>
        </div>
      </div>
      // </ReactBasicScroll> 
    );
  }
};


export default UserProfile; 


// <div>{user.first_name}</div>
// <div>{user.last_name}</div>
// <div>{user.email}</div>
// <div>{user.username}</div>
// <button className='button' onClick={signOut} >Sign Out</button>

