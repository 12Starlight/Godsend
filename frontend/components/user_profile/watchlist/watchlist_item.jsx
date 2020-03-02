// Import React Redux
import React from 'react';

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
      <article className='watchlistItem_container_inner'>
        <div className='watchlistItem_company' >{security.company}</div>
        <div className='watchlistItem_data'>
          <div>{security.symbol}</div>
          <div>{security.latestPrice}</div>
          <div className='watchlistItem_priceChange'>{(security.priceChange * 100).toFixed(1) + '%'}</div>              
        </div>
      </article>
    )
  }
}


export  default WatchlistSecurityItem; 