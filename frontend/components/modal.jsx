import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import DemoLoginContainer from './demo_login_container';

function Modal({ modal, errors, closeModal }) {

  function renderErrors() {
    let errClass = 'hiddenErrors';
    if (errors.length > 0) { errClass = '' };

    return (
      <ul className={errClass}>
        {errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  };

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <DemoLoginContainer />;
      break;
    case 'email':
      component = <LoginFormContainer />
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={event => event.stopPropagation()}>
        {component}
      </div>
      <div className="modal-errors">
        {renderErrors()}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);