// Import React Redux
import React from 'react';

// Import Local Directory Files
import ChartContainer from './chart/chart_container';
import AboutContainer from './about/about_container';
import StockNewsContainer from './stock_news/stock_news_container';
import AnalystContainer from './analyst/analyst_container';
import StockEarningsContainer from './stock_earnings/stock_earnings_container';
import AlsoContainer from './also/also_container';


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

