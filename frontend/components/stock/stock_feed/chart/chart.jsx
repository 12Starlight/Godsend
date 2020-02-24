// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom'

// Import FusionCharts
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';


// class Chart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//     }
//   }

  ReactFC.fcRoot(FusionCharts, TimeSeries);

  const jsonify = res => res.json();
  const dataFetch = fetch(
    "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/stock-chart-with-volume_data.json"
  ).then(jsonify);
  const schemaFetch = fetch(
    "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/stock-chart-with-volume_schema.json"
  ).then(jsonify);

  const dataSource = {
    caption: {
      text: `Apple, Inc. Stock Price`
    },
    subcaption: {
      text: "Stock prices from May 2014 - November 2018"
    },
    chart: {
      exportenabled: 1,
      multicanvas: false,
      theme: "fusion"
    },
    yaxis: [
      {
        plot: [
          {
            value: {
              open: "Open",
              high: "High",
              low: "Low",
              close: "Close"
            },
            type: "candlestick"
          }
        ],
        format: {
          prefix: "$"
        },
        title: "Stock Price"
      },
      {
        plot: [
          {
            value: "Volume",
            type: "column"
          }
        ],
        max: "900000000"
      }
    ],
    navigator: {
      enabled: 0
    }
  };

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "674",
        height: "380",
        dataSource
      }
    };
  }

  // componentWillMount() {
  //   this.props.giveMeMyStock(this.props.match.params.ticker);
  // }


  componentDidMount() {
    this.onFetchData();
    // this.props.giveMeMyStock(this.props.match.params.ticker);
  }

  onFetchData() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  render() {
    const { stock } = this.props; 
    // debugger; 

    return(
      <div className='chart_container' >

        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
            "loading"
        )}
      </div>
    )
  }
}


export default withRouter(Chart); 


