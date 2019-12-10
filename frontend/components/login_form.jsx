import React from 'react';
// import { login } from '../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({email: '', password: ''});
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
          <form onSubmit={this.handleSubmit}>
            <label>Email
          <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label>
            <label>Password
          <input type="password" value={this.state.password} onChange={this.update('password')} />
            </label>
            <button>Log In</button>
          </form>
        </>
      )
    }
  }
}

export default LoginForm;