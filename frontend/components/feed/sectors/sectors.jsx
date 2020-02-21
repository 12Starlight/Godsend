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
    return(
      <article className='sectors_container'>
        <div className='sectors_container_inner'>
          <div className='sectors_title'>Sectors</div>
          <div className='sectorsItem_container'>
            <div className='sectorsItem_container_inner'>
              <div className='sectorsItem'></div>
            </div>
            <div className='sectorsItem_container_inner'>
              <div className='sectorsItem'></div>
            </div>
            <div className='sectorsItem_container_inner'>
              <div className='sectorsItem'></div>
            </div>
            <div className='sectorsItem_container_inner'>
              <div className='sectorsItem'></div>
            </div>
            <div className='sectorsItem_container_inner'>
              <div className='sectorsItem'></div>
            </div>
            <div className='sectorsItem_container_inner'>
              <div className='sectorsItem'></div>
            </div>
            <div className='sectorsItem_container_inner'>
              <div className='sectorsItem'></div>
            </div>
            <div className='sectorsItem_container_inner'>
              <div className='sectorsItem'></div>
            </div>      
          </div>
        </div>
      </article>
    )
  }
}


export default Sectors; 