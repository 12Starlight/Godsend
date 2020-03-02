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


  render() {
    const { security } = this.props; 

    return(
      <article className=''>
      <Link className='watchlistItem_container_inner' to={`/stock/${security.symbol}`}>
        <div className='watchlistItem_company' >{security.company}</div>
        <div className='watchlistItem_data'>
          <div>{security.symbol}</div>
          <div>{security.latestPrice}</div>
          <div className='watchlistItem_priceChange'>{(security.priceChange * 100).toFixed(1) + '%'}</div>
        </div>      
      </Link>
      </article>
    )
  }
}


export  default WatchlistSecurityItem; 