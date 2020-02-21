// Import Local Directory Files
import React from 'react';


class Sectors extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.receiveAllSectors(); 
  }


  render(){
    const { sectors } = this.props;
    // debugger; 
    const allSectors = sectors.slice(0,8).map((sector, i) => {
      
      return(
        <div key={i} className='sectorsItem_container_inner'>
          <div className='sectorsItem'>
            <div className='sectorsItem_title'>{sector.name}</div>
            <div className='sectorsItem_rate'>{(sector.performance * 100).toFixed(2) + '%'}</div>
          </div>
        </div>
      )
    }) 


    return(
      <article className='sectors_container'>
        <div className='sectors_container_inner'>
          <div className='sectors_title'>Sectors</div>
          <div className='sectorsItem_container'>
            { allSectors }
          </div>
        </div>
      </article>
    )
  }
}


export default Sectors; 