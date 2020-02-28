// Import React Redux
import React from 'react';

// Import Local Directory Files


class AlsoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logic: false
    }

    // this.valueEnter = this.valueEnter.bind(this);
    // this.valueExit = this.valueExit.bind(this);
    // this.valueEnterRate = this.valueEnterRate.bind(this);
    // this.valueExitRate = this.valueExitRate.bind(this);
    // this.value = React.createRef();
    // this.valueRate = React.createRef();
  }

  // valueEnter(e, also) {
  //   e.preventDefault();

  //   if (this.state.logic === false) {
  //     if (sector.performance <= 0) {
  //       // this.value.style.background = 'rgba(129, 71, 0, .822)';
  //       // this.value.style.color = 'rgb(141, 15, 15)'; 
  //       this.value.style.background = '#ffffff';
  //       this.value.style.boxShadow = 'inset 0px 0px 12px 1px rgba(194,0,0,1)';
  //       this.value.style.border = 'inset 2.5px darkred';
  //     } else {
  //       // this.value.style.background = 'rgba(100, 0, 231, 0.822)';
  //       // this.value.style.color = 'rgb(12, 107, 12)';
  //       this.value.style.background = '#ffffff';
  //       this.value.style.boxShadow = 'inset 0px 0px 12px 1px rgba(0,112,7,1)';
  //       this.value.style.border = 'inset 2.5px darkgreen'
  //     }
  //   }
  //   this.setState({
  //     logic: !this.state.logic
  //   })
  // }

  // valueExit(e) {
  //   e.preventDefault();

  //   if (this.state.logic === true) {
  //     this.value.style.background = 'rgb(245, 245, 245';
  //     this.value.style.boxShadow = 'none'
  //     this.value.style.border = 'outset 2.5px rgb(29, 56, 138)';
  //     this.value.style.color = 'rgb(29, 56, 138)';
  //   }
  //   this.setState({
  //     logic: !this.state.logic
  //   })
  // }

  // valueEnterRate(e, also) {
  //   e.preventDefault();

  //   if (this.state.logic === true) {
  //     if (sector.performance <= 0) {
  //       // this.value.style.background = 'rgba(129, 71, 0, .822)';
  //       this.valueRate.style.color = 'rgb(141, 15, 15)';
  //     } else {
  //       // this.value.style.background = 'rgba(100, 0, 231, 0.822)';
  //       this.valueRate.style.color = 'rgb(12, 107, 12)';
  //     }
  //   }
  // }

  // valueExitRate(e) {
  //   e.preventDefault();

  //   if (this.state.logic === true) {
  //     this.valueRate.style.color = 'rgb(0, 68, 78)';
  //   }
  // }

  componentDidMount() {
    // debugger; // ?
    // this.props.giveMeMyStockStats(this.props.bought);
  }

  componentDidUpdate() {
    // this.props.giveMeMyStockStats(this.props.bought)
  }


  render() {
    const { alsoStat } = this.props;
    // debugger; // 2

    if (!alsoStat) {
      return <div></div>
    }
    


    return (
      // <div ref={e => this.value = e} onPointerEnter={(e) => this.valueEnter(e, sector)} onPointerLeave={(e) => this.valueExit(e)} className='sectorsItem'>
      //   <div className='sectorsItem_inner' >
      //     <div className='sectorsItem_title'>{sector.name}</div>
      //     <div ref={e => this.valueRate = e} onPointerEnter={(e) => this.valueEnterRate(e, sector)} onPointerLeave={(e) => this.valueExitRate(e)} className='sectorsItem_rate'>{(sector.performance * 100).toFixed(2) + '%'}</div>
      //   </div>
      // </div>
      <article className='alsoItem'>
        <div className='alsoItem_title_container'>
          <div>{alsoStat.company}</div>
          <div>{alsoStat.symbol}</div>
        </div>
        <div>
          <div>{'$' + alsoStat.latestPrice}</div>
          <div>{(alsoStat.priceChange * 100).toFixed(2) + '%'}</div>
        </div>
      </article>
    )
  }
};


export default AlsoItem; 