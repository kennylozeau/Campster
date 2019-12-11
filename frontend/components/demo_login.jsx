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
    return (
      <>
        <div className="login-options">
          <button onClick={this.handleDemoLogin}>Demo Login</button>
          <button onClick={() => this.props.openModal('email')}>Login with email</button>
        </div>
      </>
    )
  }
}

export default DemoLogin;