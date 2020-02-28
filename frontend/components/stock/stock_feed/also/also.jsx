// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Local Directory Files
import AlsoItem from './also_item';


class Also extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.getStats = this.getStats.bind(this);
  }

  componentDidMount() {
    this.props.givePeopleAlsoBought(this.props.match.params.ticker);
  }

  componentDidUpdate() {
    // debugger; 
    if (this.props.alsoStats.length === 0 && this.props.alsoBought !== undefined) {
      // debugger; 
      console.log('Now I am on fire!')
      this.getStats(); 
    }
  }

  getStats() {
    // debugger; 

    this.props.alsoBought.slice(0, 4).map((bought, i) => {
      console.log(bought);
      return this.props.giveAlsoStockStats(bought);
    })
  }



  render() {
    const { alsoBought, alsoStats } = this.props;
    // debugger; 

    if (!alsoBought) {
      return <div></div>
    }

    const allAlsoStats = alsoStats.map((alsoStat, i) => {
      // debugger;  

      return (
        <AlsoItem key={i} alsoStat={alsoStat} />
      )
    }) 
    // debugger; // 1

    const four = allAlsoStats.slice(0, 4);

    return(
      <article className='also_container' >
        <div className='also_title' >
          <div className='also_title_inner' >People Also Bought</div>
        </div>      
        <div className='alsoItem_container' >
          <div className='also_inner'>
           {four}
          </div>
        </div>
      </article>
    )
  }
}


export default withRouter(Also); 


// <div key={i} className='alsoItem_container_inner'>
// </div>