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
      <div className='feed_body'>Sectors</div>
    )
  }
}


export default Sectors; 