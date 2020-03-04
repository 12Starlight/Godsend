// Import React Redux
import React from 'react';

// Import Local Directory Files
import WatchlistSecurityItem from './watchlist_item';


class WatchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logic: false
    }

    this.getWatchlistStats = this.getWatchlistStats.bind(this);
    this.createWatchlistSecurityItems = this.createWatchlistSecurityItems.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.watchlistSecurities !== this.props.watchlistSecurities) {
      if (this.props.alsoStats.length < this.props.watchlistSecurities.length) {
        this.getWatchlistStats();
      }
    }
  }

  getWatchlistStats() {
    // debugger; 
    this.props.watchlistSecurities.map((key) => {
      // debugger; 
      return this.props.giveAlsoStockStats(Object.values(key));
    })
  }

  createWatchlistSecurityItems () {
    if (this.props.alsoStats.length === this.props.watchlistSecurities.length) {

      let allWatchlistSecuritites = this.props.alsoStats.map((security, i) => {
        return (
          <WatchlistSecurityItem key={i} security={security} />
        )
      })

      // debugger; 
      return allWatchlistSecuritites;
    }
  }


  render() {
    const securities = this.createWatchlistSecurityItems(); 
    // debugger; 

    return(
      <article className='watchlist_container'>
        <div className='watchlist_title_container'>
          <div className='watchlist_title'>Watchlist Securities</div>
        </div>
        <div className=''>
          <div className='' >
            {securities}
          </div>
        </div>
      </article>
    )
  }
}


export default WatchList; 