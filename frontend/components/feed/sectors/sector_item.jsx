// Import Local Directory Files
import React from 'react';


class SectorItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logic: false
    }

    this.valueEnter = this.valueEnter.bind(this);
    this.valueExit = this.valueExit.bind(this); 
    this.value = React.createRef();
  }
  
  valueEnter(e, sector) {
    e.preventDefault();

    if (this.state.logic === false) {
      if (sector.performance <= 0) {
        // this.value.style.background = 'rgba(129, 71, 0, .822)';
        this.value.style.background = '#ffffff';
        this.value.style.boxShadow = 'inset 0px 0px 12px 1px rgba(194,0,0,1)';
        this.value.style.border = 'inset 2.5px darkred';
      } else {
        // this.value.style.background = 'rgba(100, 0, 231, 0.822)';
        this.value.style.background = '#ffffff';
        this.value.style.boxShadow = 'inset 0px 0px 12px 1px rgba(0,112,7,1)';
        this.value.style.border = 'inset 2.5px darkgreen'
      }
    }
    this.setState({
      logic: !this.state.logic
    })
  }

  valueExit(e) {
    e.preventDefault();

    if (this.state.logic === true) {
      this.value.style.background = 'rgb(245, 245, 245';
      this.value.style.boxShadow = 'none'
      this.value.style.border = 'outset 2.5px rgb(29, 56, 138)'; 
      this.value.style.color = 'rgb(29, 56, 138)';
    }
    this.setState({
      logic: !this.state.logic
    })
  }


  render(){
    const { sector} = this.props; 

    return(
      <div ref={e => this.value = e} onPointerEnter={(e) => this.valueEnter(e, sector)} onPointerLeave={(e) => this.valueExit(e)} className='sectorsItem'>
        <div className='sectorsItem_title'>{sector.name}</div>
        <div className='sectorsItem_rate'>{(sector.performance * 100).toFixed(2) + '%'}</div>
      </div>
    )
  }
};


export default SectorItem; 