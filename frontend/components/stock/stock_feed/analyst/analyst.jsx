// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import ReactFC from 'react-fusioncharts';


// Import Local Directory Files


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


class Analyst extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartConfigs: {
        type: 'column2d',
        width: '613',
        height: '380',
        // dataFormat: 'jsonurl',
        dataSource: {
          chart: this.props.chart,
          data: this.props.stockdata
        }
      }
      // stockdata: this.props.stockdata 
    };

    // this.onFetchData = this.onFetchData.bind(this);
  }


  componentWillMount() {
    // this.props.giveMeMyStockRatings(this.props.match.params.ticker);
  }

  componentDidMount() {
    // debugger; 
    this.props.giveMeMyStockRatings(this.props.match.params.ticker);

    // this.setState({
    //   stockdata: this.props.stockdata
    // })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // console.log('Now I am on fire')
      // console.log(this.props.match.params);
      // debugger; 
      this.props.giveMeMyStockRating(this.props.match.params.ticker);
      // this.props.giveMeMyStockEarnings(this.props.match.params.ticker);
      // this.props.givePeopleAlsoBought(this.props.match.params.ticker); 
      this.props.history.push(`/stock/${this.props.match.params.ticker}`);
    }

    // console.log(this.state.stockdata)
    // debugger; 
  }  


  render() {
    const { chart, data, stockdata } = this.props; 
    // debugger; 
    if (!chart && !stockdata) {
      return <div>There are no ratings</div>;
    }

    // debugger; 
    return(
      <div className='analyst_container' >
        <div className='analyst_title' >
          <div className='analyst_title_inner' >Analyst</div>
        </div>
        <ReactFC {...this.state.chartConfigs} />
      </div>
    )
  }
}


export default withRouter(Analyst); 