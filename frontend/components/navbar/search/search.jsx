// Import React Redux
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  input(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.searchTerm)
  }


  render(){
    const {} = this.props; 

    return(
      <form className='nav_search_outer_container' onSubmit={this.handleSubmit} >
        <div className='nav_search_container' >
          <FontAwesomeIcon className='nav_search_icon' icon={faSearchDollar} />
          <div>
            <input 
              className='nav_search_input' 
              type='text'
              placeholder='Search' 
              onChange={this.input('searchTerm')}
              value={this.state.searchTerm}
            />
          </div>
        </div>
      </form>
    )
  }
}


export default Search;