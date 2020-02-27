// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Local Directory Files
import AlsoItemContainer from './also_item_container';


class Also extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    // this.item = React.createRef(); 
  }

  componentDidMount() {
    this.props.givePeopleAlsoBought(this.props.match.params.ticker);
  }



  render() {
    const { alsoBought, stockStats } = this.props;
    // debugger; 

    if (!alsoBought) {
      return <div></div>
    }


    const allBought = alsoBought.slice(0, 4).map((bought, i) => {
      // debugger; 

      // if (bought) {
      //   this.props.giveMeMyStockStats(bought); 
      // }

      // if (!stockStats) {
      //   return <div></div>
      // }

      return (
        <AlsoItemContainer key={i} bought={bought} />
      )
    }) 
    debugger; // 1

    return(
      <article className='also_container' >
        <div className='also_title' >
          <div className='also_title_inner' >People Also Bought</div>
        </div>      
        <div className='alsoItem_container' >
          {allBought}
        </div>
      </article>
    )
  }
}


export default withRouter(Also); 


// <div key={i} className='alsoItem_container_inner'>
// </div>