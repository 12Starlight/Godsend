// Import React Redux
import React from 'react';


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
    const user = Object.assign({}, this.state);
    this.props.userAction(user)
  }

  handleDemo(e) {
    e.preventDefault();
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
      <div>
        <form onSubmit={ this.handleSubmit } >
          <button onClick={ this.handleDemo } >demo</button>
          <label>
            <input type='text' placeholder='username' value={this.state.username} onChange={this.update('username')} />
          </label>
          <label>
            <input type='text' placeholder='password' value={this.state.password} onChange={this.update('password')} />
          </label>
          <input type='submit' value={formType} />
        </form>
      </div>
    )
  }
}


export default SignIn; 