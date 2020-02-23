// Import React Redux
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { Redirect, withRouter } from 'react-router-dom';

// Import Local Directory Files
import SignInFormContainer from '../../session_form/signin_form_container';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      ticker: '',
      logic: false,
      rendered: true 
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changedValue = this.changedValue.bind(this);
    this.company = this.company.bind(this);
    this.clicked = React.createRef(); 
    this.searchEntered = this.searchEntered.bind(this);
    this.searchExited = this.searchExited.bind(this); 
    this.selectedText = this.selectedText.bind(this); 
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
      // console.log(this.state.ticker) // user enters to get api
      this.props.stocks.forEach((stock) => {
        if (stock.ticker.includes(this.state.ticker)) {
      // this.props.giveMeMyStock(this.state.ticker);
      // this.props.giveMeMyStockNews(this.state.ticker);
      // this.props.giveMeMyStockRatings(this.state.ticker);
      // this.props.giveMeMyStockEarnings(this.state.ticker);
      // this.props.givePeopleAlsoBought(this.state.ticker);
          this.props.history.push(`/stock/${this.state.ticker}`);
        } 

        this.setState({
          rendered: !this.state.rendered 
        })
      })
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
      // console.log(this.state.ticker) // logic for getting api
      // this.props.giveMeMyStock(this.state.ticker);
      // this.props.giveMeMyStockNews(this.state.ticker);
      // this.props.giveMeMyStockRatings(this.state.ticker);
      // this.props.giveMeMyStockEarnings(this.state.ticker);
      // this.props.givePeopleAlsoBought(this.state.ticker);
      this.props.history.push(`/stock/${this.state.ticker}`);
    });
  }

  searchEntered(e) {
    e.preventDefault();

    if (this.state.logic === false) {
      document.getElementById('clicked').style.background = 'rgb(29, 57, 138)'
      document.getElementById('clicked').style.border = 'rgba(245, 245, 245, 0.0)'
      document.getElementById('clicked').style.webkitBoxShadow = '0px 0px 20px rgba(0, 0, 0, .6)'
      document.getElementById('clicked').style.boxShadow = '0px 0px 20px rgba(0, 0, 0, .6)'
      document.getElementById('clicked').style.borderRadius = '2%'
      this.setState({
        logic: !this.state.logic 
      })
    } 
  }

  searchExited(e) {
    e.preventDefault();

    if (this.state.logic === true) {
      document.getElementById('clicked').style.background = 'rgba(29, 56, 138, 0)'
      document.getElementById('clicked').style.webkitBoxShadow = 'none'
      document.getElementById('clicked').style.boxShadow = 'none'
      document.getElementById('clicked').style.border = 'solid .5px rgba(17, 33, 80, 0.726)'
      document.getElementById('clicked').style.borderRadius = '2%'
      this.setState({
        logic: !this.state.logic
      })
    }
  }

  selectedText(e) {
    document.getElementById('select').style.background = 'white'
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
        <article key={i} className='nav_search_info_container' onClick={e => this.company(e, stock)} >
          <div id='select' className='nav_search_ticker' onKeyDown={this.selectedText} >{stock.ticker}</div>
          <div className='nav_search_spacer' ></div>
          <div id='select' className='nav_search_company' onChange={this.selectedText} >{stock.company}</div>  
        </article>
      ) 
    })

    if (this.state.searchTerm === '') {
      return(
        <form id='clicked' onPointerEnter={this.searchEntered} onPointerLeave={this.searchExited} className='nav_search_outer_container' onSubmit={this.handleSubmit} >
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


export default withRouter(Search);
