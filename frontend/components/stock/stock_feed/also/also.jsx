// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Local Directory Files
import AlsoItem from './also_item';


class Also extends React.Component {
  constructor(props) {
    super(props);

    this.getStats = this.getStats.bind(this);
    this.createAlsoItems = this.createAlsoItems.bind(this);
  }

  componentDidUpdate(prevProps) {
    debugger; 
    if (prevProps.alsoBought !== this.props.alsoBought) {
    
      this.getStats(); 
    }
  }

  getStats() {

    this.props.alsoBought.slice(0, 4).map((bought, i) => {

      return this.props.giveAlsoStockStats(bought);
    })
  }

  createAlsoItems () {
  

    if (this.props.alsoStats.length === 4) {
      let allAlsoStats = this.props.alsoStats.map((alsoStat, i) => {
         

        return (
          <AlsoItem key={i} alsoStat={alsoStat} />
        )
      })
       
      return allAlsoStats; 
    }
  }



  render() {

    const items = this.createAlsoItems(); 

    return(
      <article className='also_container' >
        <div className='also_title' >
          <div className='also_title_inner' >People Also Bought</div>
        </div>
          <div className='alsoItem_container' >
            <div className='also_inner'>
              {items}
            </div>
        </div>
      </article>
    )
  }
}


export default withRouter(Also); 


