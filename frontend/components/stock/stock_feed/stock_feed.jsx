// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Local Directory Files
import ChartContainer from './chart/chart_container';
import AboutContainer from './about/about_container';
// import StockNewsContainer from './stock_news/stock_news_container';
// import AnalystContainer from './analyst/analyst_container';
// import StockEarningsContainer from './stock_earnings/stock_earnings_container';
import AlsoContainer from './also/also_container';


class StockFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    this.props.giveMeMyStockRatings(this.props.match.params.ticker); //
    this.props.giveMeMyStockEarnings(this.props.match.params.ticker); //
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // console.log('Now I am on fire')
      // console.log(this.props.match.params);
      // debugger; 
      this.props.giveMeMyStockRatings(this.props.match.params.ticker); //
      this.props.giveMeMyStockEarnings(this.props.match.params.ticker); //
      // this.props.givePeopleAlsoBought(this.props.match.params.ticker); 
      this.props.history.push(`/stock/${this.props.match.params.ticker}`);
    }
  }

  render() {
    // debugger; 
    const { stockRatings, stockEarnings } = this.props; 

    // if (!stockRatings || !stockEarnings) {
    //   return <div></div>
    // }

    return(
      <div className='stockFeed_container' >
        <ChartContainer />
        <AboutContainer />
        {/*<StockNewsContainer />*/}
        {/*<AnalystContainer stockRatings={stockRatings} />*/}
        {/*<StockEarningsContainer stockEarnings={stockEarnings} />*/}
        <AlsoContainer />
      </div>
    )
  }
}


export default withRouter(StockFeed); 


