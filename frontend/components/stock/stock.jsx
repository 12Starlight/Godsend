// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Local Directory Files


class Stock extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){

    return(
      <div className='stock'>Give Me My Stock!</div>
    )
  }
}


export default withRouter(Stock); 