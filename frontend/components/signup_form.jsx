import React from 'react';
// import { login } from '../actions/session_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      zip_code: '',
      first_name: '',
      last_name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signup(this.state);
    this.setState({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      zip_code: ''
    });
  }

  render() {

    if (this.props.currentUser) {
      return (
        <>
          <h1>Hello, {this.props.currentUser.email}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </>
      )
    } else {
      return (
        <>
          <h2>Join Campster</h2>
          <form id="signup-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First name"
                value={this.state.first_name}
                onChange={this.update('first_name')} />
              <input
                type="text"
                placeholder="Last name"
                value={this.state.last_name}
                onChange={this.update('last_name')} />
              <input
                type="text"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update('email')} />
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')} />
              <input
                type="text"
                placeholder="Zip code"
                value={this.state.zip_code}
                onChange={this.update('zip_code')} />
            <button>Sign up</button>
          </form>
        </>
      )
    }
  }
}

export default SignupForm;