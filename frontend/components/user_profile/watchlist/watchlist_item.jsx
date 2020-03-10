// Import React Redux
import React from 'react';
import { Link } from 'react-router-dom';

// Import Local Directory Files


class WatchlistSecurityItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logic: false
    }
  }

  componentDidMount() {
    this.props.fetch(this.props.security.ticker)
  }


  render() {
    const { security } = this.props; 
    let stat = this.props.stats[security.ticker] ? this.props.stats[security.ticker] : {} ;

    // debugger; 
    return(
      <article className=''>
      <Link className='watchlistItem_container_inner' to={`/stock/${security.ticker}`}>
        <div className='watchlistItem_company' >{security.company_name}</div>
        <div className='watchlistItem_data'>
          <div>{stat.symbol}</div>
          <div>{stat.latestPrice}</div>
          <div className='watchlistItem_priceChange'>{(stat.changePercent * 100).toFixed(1) + '%'}</div>
        </div>  
      </Link>
      </article>
    )
  }
}


export  default WatchlistSecurityItem;  