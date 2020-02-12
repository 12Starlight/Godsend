// Import React Redux
import React from 'react';


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
      <div>
        <form onSubmit={ this.handleSubmit } >
          <label>
            <input type='text' placeholder='First Name' value={ this.state.first_name } onChange={ this.update('first_name') } />
          </label>
          <label>
            <input type='text' placeholder='Last Name' value={this.state.last_name} onChange={this.update('last_name')} />
          </label>
          <label>
            <input type='text' placeholder='Email' value={this.state.email} onChange={this.update('email')} />
          </label>
          <label>
            <input type='text' placeholder='Username' value={this.state.username} onChange={this.update('username')} />
          </label>
          <label>
            <input type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')} />
          </label>
          <input type='submit' value={ formType } />
        </form>
      </div>
    )
  }
}


export default SignUp; 





