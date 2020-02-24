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


  render() {
    const { stock } = this.props; 
    
    if (!stock) {
      return <div>There are no stocks</div>;
    }
      
    // debugger; 
    return(
      <article className='about_container' >
        <div className='about_container_inner'>
          <div>About</div>
          <div>{stock.description}</div>
          <div className='aboutData_container'>
            <div className={'aboutData'} >{stock.CEO}</div>
            <div className={'aboutData'} >{stock.exchange}</div>
            <div className={'aboutData'} >{stock.website}</div>
            <div className={'aboutData'} >{stock.employees}</div>
            <div className={'aboutData'} >{stock.address}</div>
            <div className={'aboutData'} >{stock.state}</div>
            <div className={'aboutData'} >{stock.city}</div>
            <div className={'aboutData'} >{stock.zip}</div>
            <div className={'aboutData'} >{stock.country}</div>
            <div className={'aboutData'} >{stock.phone}</div>
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


