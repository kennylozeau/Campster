import React from 'react';
// import { openModal } from '../actions/modal_actions';

class DemoLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }
  
  handleDemoLogin(event) {
    const demoAccount = {
      email: 'kenny@kenny.com',
      password: '123456'
    }

    event.preventDefault();
    this.props.login(demoAccount)
    .then(() => this.props.closeModal());
  }
  
  render() {

    const { openModal } = this.props;

    return (
      <>
        <div className="login-options">
          <header className="modal-header">
            <h1>Welcome back!</h1>
            <h2>Time to plan another camping trip</h2>
          </header>
          <button className="demo-login-btn" onClick={this.handleDemoLogin}>Demo Login</button>
          <button className="email-login-btn" onClick={() => this.props.openModal({window: 'email'})}>Login with email</button>
          <footer className="modal-footer">
            <h2>Don't have a Campster account? <button onClick={() => openModal({window: 'signup'})}>Sign up!</button></h2>
          </footer>
        </div>
      </>
    )
  }
}

export default DemoLogin;