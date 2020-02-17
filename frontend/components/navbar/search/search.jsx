// Import React Redux
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div className='nav_search_outer_container'>
        <div className='nav_search_container' >
          <FontAwesomeIcon className='nav_search_icon' icon={faSearchDollar} />
          <div>
            <input className='nav_search_input' placeholder='Search' />
          </div>
        </div>
      </div>
    )
  }
}


export default Search;