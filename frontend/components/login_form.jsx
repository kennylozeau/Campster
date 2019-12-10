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

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state)
    .then(() => this.props.closeModal());
    // this.setState({email: '', password: ''});
  }
  
  // renderErrors() {
  //   let errClass = 'hidden';
  //   if (this.props.errors) { errClass = '' };

  //   return (
  //     <ul className={errClass}>
  //       {this.props.errors.map((error, i) => (
  //         <li key={i}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  update(field) {
    return event => this.setState({ [field]: event.currentTarget.value });
  }

  render() {

    // if (this.props.currentUser) {
    //   return (
    //     <>
    //       <h1>Hello, {this.props.currentUser.email}</h1>
    //       <button onClick={this.props.logout}>Log Out</button>
    //     </>
    //   )
    // } else {
      return (
        <>
          <header className="modal-header">
            <h1>Welcome back!</h1>
            <h2>Time to plan another camping trip</h2>
          </header>
          <form id="login-form" onSubmit={this.handleSubmit}>
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
            <button>Log In</button>
          </form>
          {/* <div className="modal-errors">
            {this.renderErrors()}
          </div> */}
        </>
      )
    // }
  }
}

export default LoginForm;