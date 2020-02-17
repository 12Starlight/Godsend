// Import React Redux
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripfire } from '@fortawesome/free-brands-svg-icons';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';

// Import Local Directory Files
import SearchContainer from '../navbar/search/search_container'


class Navbar extends React.Component {
  constructor(props) {
    super(props); 
  }


  render(){
    const { userId } = this.props;

    return(
      <div className='nav_container' >
        <div className='nav_icon_container' ><div className='nav_icon_container' ><FontAwesomeIcon className='nav_icon' icon={faGripfire} /></div></div>
        <SearchContainer />
        <div className='nav_links_outer'>
          <div className='nav_links_container'>
            <div><Link className='nav_links' to='#'>Free Stocks</Link></div>
            <div><Link className='nav_links' to='#'>Portfolio</Link></div>
            <div><Link className='nav_links' to='#'>Cash</Link></div>
            <div><Link className='nav_links' to='#'>Messages</Link></div>
            <div><Link className='nav_links' to='#'>Account</Link></div>
          </div>
        </div>
      </div>
    )
  }
}


export default Navbar;