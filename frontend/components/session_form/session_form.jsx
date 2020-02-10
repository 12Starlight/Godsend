// Import React Redux
import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    }
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
    const demo = {first_name: 'Awesome', last_name: 'Trader', email: 'awesome.trader@gmail.com', username: 'Trader123', password: '123456'}

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
      <div>
        This is the signup form 
      </div>
    )
  }
}
