// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts'; 

// Import Local Directory Files


class StockEarnings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    // debugger; 
    // this.props.giveMeMyStockEarnings(this.props.match.params.ticker);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // console.log('Now I am on fire')
      // console.log(this.props.match.params);
      // debugger; 
      // this.props.giveMeMyStockEarnings(this.props.match.params.ticker);
      // this.props.givePeopleAlsoBought(this.props.match.params.ticker); 
      this.props.history.push(`/stock/${this.props.match.params.ticker}`);
    }
  }


  render() {
    const {chart, stockdata } = this.props; 

    if (!stockdata) {
      return <div></div>
    }


    return(
      <div className='stockEarnings_container' >
        <div className='stockEarnings_title' >
          <div className='stockEarnings_title_inner' >Earnings</div>
        </div>
        <div className='stockEarnings_chart' >
          <ReactFusioncharts
            type='scrollcombi2d'
            width='90%'
            height='60%'
            dataFormat='JSON'
            dataSource={this.props.stockdata}
          />        
        </div>
      </div>
    )
  }
}


export default withRouter(StockEarnings); 