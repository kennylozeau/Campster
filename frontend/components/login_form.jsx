import React from 'react';

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
  }

  update(field) {
    return event => this.setState({ [field]: event.currentTarget.value });
  }

  render() {
    const { openModal } = this.props;
    return (
      <>
        <header className="modal-header">
          <h1>Welcome back!</h1>
          <h2>Time to plan another camping trip</h2>
        </header>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <input
            type="email"
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
        <footer className="modal-footer">
          <h2>Don't have a Campster account? <button onClick={() => openModal({window: 'signup'})}>Sign up!</button></h2>
        </footer>
      </>
    )
  }
}

export default LoginForm;