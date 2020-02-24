// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

// Import Local Directory Files
import StockFeedContainer from './stock_feed/stock_feed_container';


class Stock extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // console.log('Now I am on fire')
      // console.log(this.props.match.params);
      // debugger; 
      this.props.giveMeMyStock(this.props.match.params.ticker);
      // this.props.giveMeMyStockNews(this.props.match.params.ticker);
      // this.props.giveMeMyStockRatings(this.props.match.params.ticker);
      // this.props.giveMeMyStockEarnings(this.props.match.params.ticker);
      // this.props.givePeopleAlsoBought(this.props.match.params.ticker); 
      this.props.history.push(`/stock/${this.props.match.params.ticker}`);
    }
  }


  render(){
    // debugger; 
    const { stock } = this.props;

    return(
      <div className='stock_outer_container'> 
        <NavbarContainer />
        <div className='stock_container'>
          <StockFeedContainer stock={stock} />
          <div className='action_container'>
            <div className='trade_container' >Trade</div>
            <button className='watchlist_action'>Watchlist</button>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Stock); 