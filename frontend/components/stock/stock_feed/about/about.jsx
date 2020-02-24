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
  
  componentWillMount() {
    // this.props.giveMeMyStock();
  }

  componentDidMount() {
    // debugger; 
    this.props.giveMeMyStock(); 
  }

  componentDidUpdate(){
    // debugger; 
    // this.props.giveMeMyStock(); 
  }


  render() {
    const { stock } = this.props; 
    // const dataObj = Object.assign({}, )
    
    if (!stock) {
      return <div>There are no stocks</div>;
    }
      
    // debugger; 
    return(
      <article className='about_container' >
        <div className='about_container_inner'>
          <div>About</div>
          <div>{stock.description}</div>
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


