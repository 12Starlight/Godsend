// Import React Redux
import React from 'react';

// Import Local Directory Files
import WatchlistItem from './watchlist_item';
import { render } from 'react-dom';


class WatchList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWatchlistSecurities(); 
  }


  render() {
    return(
      <div className='watchlist_container'>
      </div>
    )
  }
}


export default WatchList; 