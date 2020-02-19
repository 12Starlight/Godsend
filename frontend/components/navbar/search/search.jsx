// Import React Redux
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      ticker: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changedValue = this.changedValue.bind(this);
    this.company = this.company.bind(this);
  }

  input(type) {
    return e => {
      this.setState({
        [type]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.ticker)
  }

  changedValue(val) {
    this.setState({
      searchTerm: val
    })
  }

  company(e) {
    e.preventDefault();
    console.log(this.state.ticker) // logic for getting api
  }


  render(){
    const { stocks } = this.props; 

    let filteredStocks = stocks.filter(stock => {
      
      if (stock.ticker.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || stock.company.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
        return stock 
      }
    })

    const companies = filteredStocks.slice(0,6).map((stock, i) => {
      this.state.ticker = stock.ticker; 
      return(
        <article key={i} onClick={this.company} >
          <div>{stock.ticker}</div>
          <div>{stock.company}</div>  
        </article>
      ) 
    })

    if (this.state.searchTerm === '') {
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
    } else {
        return (
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
              { companies }
          </form>
        )
    }
  }
}


export default Search;