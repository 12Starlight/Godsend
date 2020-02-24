// Import React Redux
import React from 'react';

// Import Local Directory Files
import ChartContainer from '../stock_feed/chart/chart_container'
import AboutContainer from '../stock_feed/about/about_container';
import StockNewsContainer from '../stock_feed/stock_news/stock_news_container';
import AnalystContainer from '../stock_feed/analyst/analyst_container';
import StockEarningsContainer from '../stock_feed/stock_earnings/stock_earnings_container';
import AlsoContainer from '../stock_feed/also/also_container';


class StockFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    return(
      <div className='stockFeed_container' >
        <ChartContainer />
        <AboutContainer />
        <StockNewsContainer />
        <AnalystContainer />
        <StockEarningsContainer />
        <AlsoContainer />
      </div>
    )
  }
}


export default StockFeed; 