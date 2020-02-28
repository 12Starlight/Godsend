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
      logic: false 
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     // console.log('Now I am on fire')
  //     // console.log(this.props.match.params);
  //     // debugger; 
  //     this.props.giveMeMyStock(this.props.match.params.ticker);
  //     // this.props.giveMeMyStockNews(this.props.match.params.ticker);
  //     // this.props.giveMeMyStockRatings(this.props.match.params.ticker);
  //     // this.props.giveMeMyStockEarnings(this.props.match.params.ticker);
  //     // this.props.givePeopleAlsoBought(this.props.match.params.ticker); 
  //     this.props.history.push(`/stock/${this.props.match.params.ticker}`);
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    
    const security = { company_name: this.props.stock.stockSymbol.companyName, ticker: this.props.stock.stockSymbol.symbol }
    this.props.createSecurity(security); 
  }



  render(){
    // debugger; 
    const { stock } = this.props; 
    // debugger; 


    return(
      <div className='stock_outer_container'> 
        <NavbarContainer />
        <div className='stock_container'>
          <StockFeedContainer />
          <div className='action_container'>
            <div className='trade_container' >Trade</div>
            <button onClick={this.handleSubmit} className='watchlist_action'>Add To Watchlist</button>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Stock); 