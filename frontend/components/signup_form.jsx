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
    this.props.signup(this.state)
      .then(() => this.props.closeModal());
  }

  render() {

    const { openModal } = this.props;

    return (
      <>
        <header className="modal-header">
          <h1>Join Campster</h1>
          <h2>Discover camping in your area</h2>
        </header>
        <form id="signup-form" onSubmit={this.handleSubmit}>
            <div>
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
            </div>
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
            <input
              type="text"
              placeholder="Zip code"
              value={this.state.zip_code}
              onChange={this.update('zip_code')} />
          <button>Join Campster</button>
        </form>
        <footer className="modal-footer">
          <h2>Already have an account? <button onClick={() => openModal({window: 'login'})}>Log in!</button></h2>
        </footer>
      </>
    )
  }
}

export default SignupForm;