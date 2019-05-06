import React, { useState, useRef } from 'react';
import { string, bool, func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'auth/selectors';
import { login, resetAuthError } from 'auth/actions';
import { Button, H2 } from 'elements';
import { spacing, flexCenter } from 'utils';
import { InputBox, useAutoFocus, WithLoader } from 'common';
import AuthErrorHandler from 'auth/components/AuthErrorHandler';

const loginForm = ({ login, resetAuthError, error, isLoading, closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  const setCredentials = () => ({ email, password });
  const handleSubmit = event => {
    const newCredentials = setCredentials();
    event.preventDefault();
    login(newCredentials).then(res => res && closeModal());
  };

  return (
    <WithLoader isLoading={isLoading}>
      <Form onSubmit={handleSubmit}>
        <Title>Logowanie</Title>
        <InputBox
          ref={autoFocusRef}
          change={event => setEmail(event.target.value)}
          type="email"
          placeholder="Twój email"
          id="email"
          value={email}
          required
        />
        <InputBox
          change={event => setPassword(event.target.value)}
          type="password"
          placeholder="Twoje hasło"
          id="password"
          value={password}
          required
        />
        <Button type="submit">Zaloguj się</Button>
        <AuthErrorHandler error={error} resetError={resetAuthError} />
      </Form>
    </WithLoader>
  );
};

loginForm.propTypes = {
  login: func.isRequired,
  error: string,
  isLoading: bool,
  closeModal: func,
  resetAuthError: func.isRequired
};

loginForm.defaultProps = {
  error: null,
  isLoading: false,
  closeModal: () => null
};

const mapStateToProps = state => ({
  error: getErrorAuthState(state),
  isLoading: getIsLoadingAuthState(state)
});

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         login,
//         resetAuthError
//       },
//       dispatch
//     )
//   };
// };

export default connect(
  mapStateToProps,
  { login, resetAuthError }
)(loginForm);

const Title = styled(H2)`
  text-align: center;
  margin-bottom: ${spacing[4]};
`;

const Form = styled.form`
  ${flexCenter};
  flex-direction: column;
  max-width: 35rem;
  margin: ${spacing[4]} auto 0;
`;

// state = {
//   email: '',
//   password: ''
// };

// static propTypes = {
//   actions: shape({
//     login: func.isRequired
//   }).isRequired,
//   error: string,
//   isLoading: bool,
//   closeModal: func
// };

// static defaultProps = {
//   error: null,
//   isLoading: false,
//   closeModal: () => null
// };

// const handleChange = event => {
//   this.setState({
//     [event.target.id]: event.target.value
//   });
// };

// this.setState({
//   email: '',
//   password: ''
// });
// };

// handleCloseErrorMessage = () => {
//   this.setState({
//     isErrorInfoShown: false
//   });
// };

// render() {
// const { email, password } = this.state;
// const { error, isLoading } = this.props;
