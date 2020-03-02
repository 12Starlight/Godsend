// Import React Redux
import React from 'react';

// Import Local Directory Files
import WatchlistItem from './watchlist_item';


class WatchList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWatchListSecurities(); 
  }


  render() {
    return(
      <article className='watchlist_container'>
        <div className='watchlist_title_container'>
          <div className='watchlist_title'>Watchlist Securities</div>
        </div>
      </article>
    )
  }
}


export default WatchList; 