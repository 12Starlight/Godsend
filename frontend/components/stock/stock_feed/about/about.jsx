// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Local Directory Files


class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  componentWillMount() {
    // this.props.giveMeMyStock();
  }

  componentDidMount() {
    // debugger; 
    this.props.giveMeMyStock(this.props.match.params.ticker); 
    this.props.giveMeMyStockStats(this.props.match.params.ticker); 
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // console.log('Now I am on fire')
      // console.log(this.props.match.params);
      // debugger; 
      this.props.giveMeMyStock(this.props.match.params.ticker);
      this.props.giveMeMyStockStats(this.props.match.params.ticker);
      // this.props.giveMeMyStockNews(this.props.match.params.ticker);
      // this.props.giveMeMyStockRatings(this.props.match.params.ticker);
      // this.props.giveMeMyStockEarnings(this.props.match.params.ticker);
      // this.props.givePeopleAlsoBought(this.props.match.params.ticker); 
      this.props.history.push(`/stock/${this.props.match.params.ticker}`);
    }
  }


  render() {
    const { stock, stockStats } = this.props; 
    
    if (!stock) {
      return <div>There are no stocks</div>;
    }
      
    debugger; 
    return(
      <article className='about_container' >
        <div className='about_inner'>
          <div>About</div>
          <div>{stock.description}</div>
          <div className='aboutData_container'>
            <div className={'aboutData_inner'} >
              <div>{`CEO`}</div>
              <div>{stock.CEO}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Exchange`}</div>
              <div>{stock.exchange}</div>                           
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Website`}</div>
              <div>{stock.website}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Employees`}</div>
              <div>{stock.employees}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Market Cap`}</div>
              <div>{((stockStats.marketCap)/1000000).toFixed(2) + 'B'}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Price-Earnings Ratio`}</div>
              <div>{stockStats.peRatio}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Year-to-date Change`}</div>
              <div>{(stockStats.ytdChange*100).toFixed(2) + '%'}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Average Total Volume`}</div>
              <div>{(stockStats.avgTotalVolume/1000000).toFixed(2) + 'M'}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Today's High`}</div>
              <div>{stockStats.high}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Today's Low`}</div>
              <div>{stockStats.low}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Open`}</div>
              <div>{stockStats.open}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`Volume`}</div>
              <div>{(stockStats.volume/1000000).toFixed(2) + 'M'}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`52 Week High`}</div>
              <div>{stockStats.week52High}</div>
            </div>
            <div className={'aboutData_inner'} >
              <div>{`52 Week Low`}</div>
              <div>{stockStats.week52Low}</div>
            </div>
          </div>
        </div>
      </article>
    )
  }
}


export default withRouter(About); 


// <div>{}</div>
// <div>{}</div>
// <div>{}</div>
// <div>{}</div>


