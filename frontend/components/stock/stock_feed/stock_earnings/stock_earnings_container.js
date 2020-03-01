// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import StockEarnings from './stock_earnings';


// mapStateToProps 
const mapStateToProps = (state, ownProps) => {
  let data = ownProps.stockEarnings.earnings; 

  // debugger; 
  const dataSource = {
    chart: {
      caption: 'Quarterly Earnings',
      subcaption: 'Actual Vs Estimated',
      numberprefix: '$',
      scrollheight: '10',
      numvisibleplot: '4',
      showanchors: '0',
      theme: 'fusion'
    },
    categories: [
      {
        category: [
          {
            label: 'Q4 2019'
          },
          {
            label: 'Q3 2019'
          },
          {
            label: 'Q2 2019',
          },
          {
            label: 'Q1 2019'
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: 'Actual',
        data: [
          {
            value: `${data[0].actualEPS}`
          },
          {
            value: `${data[1].actualEPS}`
          },
          {
            value: `${data[2].actualEPS}`
          },
          {
            value: `${data[3].actualEPS}`
          }
        ]
      },
      {
        seriesname: 'Estimated',
        renderas: 'area',
        data: [
          {
            value: `${data[0].consensusEPS}`
          },
          {
            value: `${data[1].consensusEPS}`
          },
          {
            value: `${data[2].consensusEPS}`
          },
          {
            value: `${data[3].consensusEPS}`
          }
        ]
      }
    ]
  };  
  return {
  stockdata: dataSource 
}};

// mapDispatchToProps 
const mapDispatchToProps = (dispatch) => ({
  giveMeMyStockEarnings: (searchTerm) => dispatch(giveMeMyStockEarnings(searchTerm))
})


export default connect(mapStateToProps, mapDispatchToProps)(StockEarnings); 