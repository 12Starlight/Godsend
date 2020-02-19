// Import React Redux
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      ticker: '',
      logic: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changedValue = this.changedValue.bind(this);
    this.company = this.company.bind(this);
    this.clicked = React.createRef(); 
    this.searchClicked = this.searchClicked.bind(this);
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
    this.setState((prev, state) => ({
      ticker: this.clicked.current.value.toUpperCase()    
    }), () => {
      console.log(this.state.ticker) // user enters to get api
    });
  }

  changedValue(val) {
    this.setState({
      searchTerm: val
    })
  }

  company(e, stock) {
    e.preventDefault();
    this.setState((prev, state) => ({
      ticker: stock.ticker
    }), () => {
      console.log(this.state.ticker) // logic for getting api
    });
  }

  searchClicked(e) {
    e.preventDefault();

    if (this.state.logic === false) {
      document.getElementById('clicked').style.background = 'rgb(29, 57, 138)'
      this.setState({
        logic: !this.state.logic 
      })
    } else {
      document.getElementById('clicked').style.background = 'rgba(29, 56, 138, 0)'
      this.setState({
        logic: !this.state.logic 
      })
    }
  }


  render(){
    const { stocks } = this.props; 

    let filteredStocks = stocks.filter(stock => {
      
      if (stock.ticker.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || stock.company.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
        return stock 
      }
    })

    const companies = filteredStocks.slice(0,6).map((stock, i) => {
      // debugger; 
      return(
        <article key={i} onClick={e => this.company(e, stock)} >
          <div>{stock.ticker}</div>
          <div>{stock.company}</div>  
        </article>
      ) 
    })

    if (this.state.searchTerm === '') {
      return(
        <form id='clicked' onClick={this.searchClicked} className='nav_search_outer_container' onSubmit={this.handleSubmit} >
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
                  ref={this.clicked}
                />
              </div>
            </div>
            <article className='nav_search_article_container'>
              <label>
                <div className='nav_search_stocks'>Stocks</div>
              </label>
                { companies }
            </article>
          </form>
        )
    }
  }
}


export default Search;