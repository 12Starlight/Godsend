// Import React Redux
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripfire } from '@fortawesome/free-brands-svg-icons';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger; 
    const user = Object.assign({}, this.state);
    this.props.userAction(user)
  }

  handleDemo(e) {
    e.preventDefault();
    // debugger; 
    // const demo = { first_name: 'Awesome', last_name: 'Trader', email: 'awesome.trader@gmail.com', username: 'Trader123', password: '123456' }
    const demo = { username: 'Trader123', password: '123456' }

    this.props.demoAction(demo);
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }


  render() {
    const { formType, navLink } = this.props;

    return (
      <div className='outer_container'>
        <div className='left_container'>
          <div className='background_img'></div>
        </div>
        <div className='right_container'>
          <div className='form_background'>
            <form className='form' onSubmit={this.handleSubmit} >
              <div className='form_data_container' >
                <div className='title'>Welcome To Godsend <FontAwesomeIcon icon={faGripfire} /></div>
                <div className='label_container'>
                  <label >
                    <div className='label' >Username</div>
                    <input className='textbox' type='text' placeholder='' value={this.state.username} onChange={this.update('username')} />
                  </label>
                  <label >
                    <div className='label' >Password</div>
                    <input className='textbox' type='text' placeholder='' value={this.state.password} onChange={this.update('password')} />
                  </label>
                </div>
              </div>
              <div className='button_container' >
                <input className='button' type='submit' value={formType} />
                <button className='button' onClick={this.handleDemo} >demo</button>
              </div>
            </form>    
          </div>     
        </div>
      </div>
    )
  }
}


export default SignIn; 


