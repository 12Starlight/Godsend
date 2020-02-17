// Import React Redux
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripfire } from '@fortawesome/free-brands-svg-icons';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component {
  constructor(props) {
    super(props); 
  }


  render(){
    const { userId } = this.props;

    return(
      <div className='nav_container' >
        <div className='nav_icon_container' ><div className='nav_icon_container' ><FontAwesomeIcon className='nav_icon' icon={faGripfire} /></div></div>
        <div className='nav_search_outer_container'><div className='nav_search_container' ><FontAwesomeIcon className='nav_search_icon' icon={faSearchDollar} /><div><input className='nav_search_input' placeholder='Search' /></div></div></div>
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