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
    // debugger; 
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
      <div className='si_outer_container'>
        <div className='si_left_container'>
          <div className='si_background_img'></div>
        </div>
        <div className='si_right_container'>
          <div className='si_form_background'>
            <form className='si_form' onSubmit={this.handleSubmit} >
              <div className='si_form_data_container' >
                <div className='si_title'>Welcome To Godsend <FontAwesomeIcon icon={faGripfire} /></div>
                <div className='si_label_container'>
                  <label >
                    <div className='si_label' >Username</div>
                    <input className='si_textbox' type='text' placeholder='' value={this.state.username} onChange={this.update('username')} />
                  </label>
                  <label >
                    <div className='si_label' >Password</div>
                    <input className='si_textbox' type='password' placeholder='' value={this.state.password} onChange={this.update('password')} />
                  </label>
                </div>
              </div>
              <div className='si_errors' >{this.renderErrors()}</div>
              <div className='si_button_container' >
                <input className='si_button' type='submit' value={formType} />
              </div>
            </form>    
          </div>     
        </div>
      </div>
    )
  }
}


export default SignIn; 


// <button className='si_button' onClick={this.handleDemo} >Demo</button>