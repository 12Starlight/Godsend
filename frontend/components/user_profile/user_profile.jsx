// Import React Redux
import React from 'react';
import { Link } from 'react-router-dom';
import errorsReducer from '../../reducers/errors_reducer';

// Import Local Directory Files


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { user, signOut } = this.props; 

    return (
      <div className='user_container' >
        <div className="user">
          <div>{user.first_name}</div>
          <div>{user.last_name}</div>
          <div>{user.email}</div>
          <div>{user.username}</div>
          <button className='button' onClick={signOut} >Sign Out</button>
        </div>
      </div>
    );
  }
};


export default UserProfile; 