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
    this.switch = this.switch.bind(this);
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.watchlistSecurities !== this.props.watchlistSecurities) {
    //   console.log(this.props.alsoStats.length)
    //   console.log(this.props.watchlistSecurities.length)
    //   // debugger; 
    //   if (this.props.alsoStats.length < this.props.watchlistSecurities.length) {
    //     this.getWatchlistStats(); 
    //   } else {
    //     return; 
    //   }
    // }
  }

  componentDidMount() {

  }

  getWatchlistStats() {
    // debugger; 
    let items = this.props.watchlistSecurities
    items.map((item) => {
      // debugger; 
      return this.props.giveAlsoStockStats(item.ticker);
    })
  }

  createWatchlistSecurityItems () {

    // if (this.props.alsoStats.length === this.props.watchlistSecurities.length) {
      let fetch = this.props.giveAlsoStockStats
      let stats = this.props.alsoStats 

      let allWatchlistSecuritites = this.props.watchlistSecurities.map((security, i) => {
        return (
          <WatchlistSecurityItem key={i} fetch={fetch} stats={stats} security={security} />
        )
      })

      // debugger; 
      return allWatchlistSecuritites;
    // }
  }

  switch() {
    let securityItems = this.createWatchlistSecurityItems()
    if (securityItems.length < 1) {
      return <div className='watchlistItem_container_inner_add'>Please add a security to watchlist</div>
    } else {
      // debugger;
      return securityItems;
    }
  }


  render() {
    // const securities = this.createWatchlistSecurityItems(); 
    // debugger; 

    return(
      <article className='watchlist_container'>
        <div className='watchlist_title_container'>
          <div className='watchlist_title'>Watchlist Securities</div>
        </div>
        <div className=''>
          <div className='' >
            {this.switch()}
          </div>
        </div>
      </article>
    )
  }
}


export default WatchList; 