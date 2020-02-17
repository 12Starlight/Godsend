// Import React Redux
import React from 'react';
import { Link } from 'react-router-dom';
import errorsReducer from '../../reducers/errors_reducer';

// Import Local Directory Files
import NavbarContainer from '../navbar/navbar_container'


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
            <div className='feed_container'>
              <div className='watchlist_header' ><div>Welcome To Godsend</div><div>Awesome Picture</div></div>
              <div className='watchlist_body'>Popular Colections</div>
              <div className='watchlist_body'>News</div>
              <div className='watchlist_items'>
                <article>Tom News Item 1</article>
              </div>
              <div className='watchlist_items'>
                <article>Tom News Item 2</article>
              </div>
              <div className='watchlist_items'>
                <article>Tom Movers</article>
              </div>
              <div className='watchlist_items'>
                <article>News Item 1</article>
              </div>
              <div className='watchlist_items'>
                <article>News Item 2</article>
              </div>
              <div className='watchlist_items'>
                <article>News Item 3</article>
              </div>
              <div className='watchlist_items'>
                <article>News Item 4</article>
              </div>
              <div className='watchlist_items'>
                <article>News Item 5</article>
              </div>
              <div className='watchlist_items'>
                <article>News Item 6</article>
              </div>
              <div className='watchlist_items'>
                <article>News Item 7</article>
              </div>
              <div className='watchlist_items'>
                <button className='button' onClick={signOut} >Sign Out</button>
              </div>
            </div>
            <div className='watchlist_container'></div>
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