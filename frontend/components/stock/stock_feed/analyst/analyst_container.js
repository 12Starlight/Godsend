// Import React Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import Local Directory Files
import Analyst from './analyst';
import { giveMeMyStockRatings } from '../../../../actions/stock_actions';

// const jsonify = res => res.json(); 
// const chartConfigs = (stockSearch) => ({
//   type: 'column2d',
//   width: '700',
//   height: '400',
//   chart: {
//     caption: 'Analyst Recommendations [2019-2020]',
//     'suCaption': 'Ratings broken up by quarter',
//     'xAxisName': 'Analyst Recommendations',
//     'yAxisName': '# Of Recommendations',
//     'theme': 'fusion',
//   },
//   dataFormat: 'jsonurl',
//   dataSource: fetch(`https://cloud.iexapis.com/stable/stock/${stockSearch}/recommendation-trends?token=sk_a88370cdf5ed4d0182b3af410705cd94`).then(jsonify),
// });


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  
  
  // debugger;   
  // const stockRatingsData = Object.keys(state.entities.stock.ratingId).map((k, v) => {
  //   const stockRatings = {}; 
    
  //   if (k.ratingBuy === 'ratingBuy') {
  //     stockRatings.label = [k.ratingBuy];
  //     stockRatings.value = k[v];
  //   }

  //   return stockRatings; 
  // });

  const chart = {
    'caption': 'Analyst Recommendations [2019-2020]',
    'subCaption': ``,
    'xAxisName': 'Recommendations',
    'yAxisName': '# Of Recommendations',
    'theme': 'fusion'
  }

  // const data = [
  //   {
  //     "label": "Buy [1]",
  //     "value": "39"
  //   },
  //   {
  //     "label": "Outperform [1.5]",
  //     "value": "3"
  //   },
  //   {
  //     "label": "Hold [2]",
  //     "value": "6"
  //   },
  //   {
  //     "label": "Underperform [2.5]",
  //     "value": "0"
  //   },
  //   {
  //     "label": "sell [3]",
  //     "value": "2"
  //   }
  // ];

  // let ratingsData; 

  // if (ratingsData) {
  //   ratingsData = [
  //     {
  //       "label": "Buy [1]",
  //       "value": `${stockdata.ratingBuy}`
  //     },
  //     {
  //       "label": "Outperform [1.5]",
  //       "value": `${stockdata.ratingOverweight}`
  //     },
  //     {
  //       "label": "Hold [2]",
  //       "value": `${stockdata.ratingHold}`
  //     },
  //     {
  //       "label": "Underperform [2.5]",
  //       "value": `${stockdata.ratingUnderweight}`
  //     },
  //     {
  //       "label": "sell [3]",
  //       "value": `${stockdata.ratingSell}`
  //     }
  //   ];

  //   ratingsData = Object.assign({}, ratingsData); 
  // }

  // let stockdata; 

  // if (data.length > 0) {
    // console.log(ownProps.stockRatings[0])
    // debugger; 
    let data = ownProps.stockRatings;

    // let data = state.entities.stock.raingId; 
    // // debugger; 

    // if (data) {
    //   data = Object.assign({}, data)
    // }
  
    const stockdata = [
      {
        "label": "Buy [1]", // 1
        "value": `${data[0].ratingBuy}`
      },
      {
        "label": "Outperform [1.5]", // 1.5
        "value": `${data[0].ratingOverweight}`
      },
      {
        "label": "Hold [2]", // 2
        "value": `${data[0].ratingHold}`
      },
      {
        "label": "Underperform [2.5]", // 2.5
        "value": `${data[0].ratingUnderweight}`
      },
      {
        "label": "sell [3]", // 3
        "value": `${data[0].ratingSell}`
      }
    ];
  // }


  return {
  // stockdata: stockdata,
  stockdata: stockdata,
  chart: chart  
}};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  giveMeMyStockRatings: (searchTerm) => dispatch(giveMeMyStockRatings(searchTerm))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Analyst));