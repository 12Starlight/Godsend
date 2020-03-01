// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

// Import Local Directory Files
import StockFeedContainer from './stock_feed/stock_feed_container';


class Stock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logic: false, 
      message: 'Add To Watchlist'
    }

    this.addSecurity = this.addSecurity.bind(this);
    this.removeSecurity = this.removeSecurity.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     // console.log('Now I am on fire')
  //     // console.log(this.props.match.params);
  //     // debugger; 
          // window.location.reload(); 
  //     // this.props.giveMeMyStock(this.props.match.params.ticker);
  //     // this.props.giveMeMyStockNews(this.props.match.params.ticker);
  //     // this.props.giveMeMyStockRatings(this.props.match.params.ticker);
  //     // this.props.giveMeMyStockEarnings(this.props.match.params.ticker);
  //     // this.props.givePeopleAlsoBought(this.props.match.params.ticker); 
  //     this.props.history.push(`/stock/${this.props.match.params.ticker}`);
  //   }
  // }

  addSecurity(e) {
    e.preventDefault();
    this.setState({
      logic: !this.logic,
      message: 'Remove From Watchlist'
    })

    const security = { company_name: this.props.stock.stockSymbol.companyName, ticker: this.props.stock.stockSymbol.symbol }
    this.props.addedSecurity(security); 
  }

  removeSecurity(e) {
    e.preventDefault();
    this.setState({
      logic: false, 
      message: 'Add To Watchlist'
    })

    let securityId = Object.keys(this.props.securities)
    this.props.removedSecurity(securityId);
  }


  render(){
    // debugger; 
    const { securities } = this.props; 
    // debugger; 

    if (this.state.logic === false) {
      return (
        <div className='stock_outer_container'>
          <NavbarContainer />
          <div className='stock_container'>
            <StockFeedContainer />
            <div className='action_container'>
              <div className='trade_container' >Trade</div>
              <button onClick={this.addSecurity} className='watchlist_action'>{this.state.message}</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='stock_outer_container'>
          <NavbarContainer />
          <div className='stock_container'>
            <StockFeedContainer />
            <div className='action_container'>
              <div className='trade_container' >Trade</div>
              <button onClick={this.removeSecurity} className='watchlist_action'>{this.state.message}</button>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default withRouter(Stock); 