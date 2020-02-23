// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

// Import Local Directory Files


class Stock extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){

    return(
      <div className='stock_outer_container'> 
        <NavbarContainer />
        <div className='stock_container'>
          
        </div>
      </div>
    )
  }
}


export default withRouter(Stock); 