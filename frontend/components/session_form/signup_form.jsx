// Import React Redux
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';


class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    };

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
              { error }
            </li>
          ))
        }
      </ul>
    );
  }


  render() {
    const { formType, navLink } = this.props;
 
    return ( 
      <div className='su_container' >
        <div className='su_single_container' >
        <div className='su_form_background' >
          <form onSubmit={ this.handleSubmit } >
            <div className='su_title_background' >     
              <div className='su_title_container' >
                <div className='su_title' >
                  Reach New Heights &nbsp; <FontAwesomeIcon icon={faReact} /> &nbsp; <kbd>...</kbd> &nbsp; let Godsend <div className='su_tm_container' ><span className='su_tm' >™</span></div>&nbsp;take you there &nbsp; <FontAwesomeIcon icon={faRocket} />
                </div>
                <div className='su_quote' >"This is one of the most innovative trading apps I have ever used" ~Tom Hanks</div>
              </div>
            </div>

            <div className='su_data_container' >
              <div className='su_data_background' >
                <div className='su_name' >
                  <label>
                    <input className='su_name_text' type='text' placeholder='First Name' value={ this.state.first_name } onChange={ this.update('first_name') } />
                  </label>
                  <label>
                    <input className='su_name_text' type='text' placeholder='Last Name' value={this.state.last_name} onChange={this.update('last_name')} />
                  </label>
                </div> 
                <div className='su_info' >
                  <label>
                    <input className='su_info_text' type='text' placeholder='Email' value={this.state.email} onChange={this.update('email')} />
                  </label>
                  <label>
                    <input className='su_info_text' type='text' placeholder='Username' value={this.state.username} onChange={this.update('username')} />
                  </label>
                  <label>
                    <input className='su_info_text' type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')} />
                  </label>   
                  <div className='su_button_container' >
                    <input className='su_button' type='submit' value={ formType } />
                    <button className='su_button' onClick={this.handleDemo} >demo</button>                  
                  </div>
                </div>
              </div>
              <div className='su_icon_container' >
                <div className='su_icon'></div>
              </div>
            </div>


          </form> 
         </div>     
        </div>
      </div>
    )
  }
}


export default SignUp; 





