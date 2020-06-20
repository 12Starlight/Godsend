// Import React Redux
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripfire, faLinkedin, faGithub, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { faSearchDollar, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

// Import Local Directory Files
import SearchContainer from '../navbar/search/search_container'


class Navbar extends React.Component {
  constructor(props) {
    super(props); 
  }


  render(){
    const { userId, signOut } = this.props;
    // debugger; 
    return(
      <div className='nav_container' >
        <div className='nav_icon_container' ><div className='nav_icon_container' ><Link to={`/users/protrader`} ><FontAwesomeIcon className='nav_icon' icon={faGripfire} /></Link></div></div>
        <SearchContainer />
         <div class="navLinks-wrapper">
          <div class="navLinks-container">
            <div className='outer-links'><div className='inner-links'><button className='signout' onClick={signOut} >Sign Out</button></div></div>
            <div className='outer-links'><a className='inner-links' href="https://www.linkedin.com/in/davegagnat/"><FontAwesomeIcon class="linkedIn" icon={faLinkedin} /></a></div>
            <div className='outer-links'><a className='inner-links' href="https://github.com/12Starlight"><FontAwesomeIcon class="github" icon={faGithub} /></a></div>
            <div className='outer-links'><a className='inner-links' href="https://twitter.com/hashtag/TheCodeEffect?src=hash"><FontAwesomeIcon class="twitter" icon={faTwitter} /></a></div>
            <div className='outer-links'><a className='inner-links' href="https://angel.co/u/dave-gagnat"><FontAwesomeIcon class="angel" icon={faAngellist} /></a></div>
            <div className='outer-links'><a className='inner-links' href="https://www.davegagnat.com"><FontAwesomeIcon class="globe" icon={faGlobeAmericas} /></a></div>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Navbar);