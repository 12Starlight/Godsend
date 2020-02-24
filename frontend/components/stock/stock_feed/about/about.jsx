// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Local Directory Files


class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  componentDidMount() {
    this.props.giveMeMyStock(); 
  }


  render() {
    const { stock } = this.props; 
    
    // if (!stock.description) {
      // return <div>There are no stocks</div>;
      // }
      
    debugger; 
    return(
      <article className='about_container' >
        <div>
          <div>About</div>
          <div>{stock.stockSymbol.description}</div>
        </div>
      </article>
    )
  }
}


export default withRouter(About); 


// <div>{}</div>
// <div>{}</div>
// <div>{}</div>
// <div>{}</div>


