import React, { useState, useRef } from 'react';
import { string, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'app/auth/selectors';
import { login, resetAuthError } from 'app/auth/actions';
import { InputBox, useAutoFocus, WithLoader } from 'app/common';
import AuthErrorHandler from 'app/auth/components/AuthErrorHandler';
import { spacing } from 'utils';

import * as S from 'elements';

const loginForm = ({
  login,
  resetAuthError,
  error,
  isLoading,
  onCloseModal
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  const setCredentials = () => ({ email, password });
  const handleSubmit = event => {
    const newCredentials = setCredentials();
    event.preventDefault();
    login(newCredentials).then(res => res && onCloseModal());
  };

  return (
    <WithLoader isLoading={isLoading}>
      <S.H2 center marginBottom={spacing[4]}>
        Logowanie
      </S.H2>
      <S.Form onSubmit={handleSubmit}>
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
        <S.Button type="submit">Zaloguj się</S.Button>
        <AuthErrorHandler error={error} resetError={resetAuthError} />
      </S.Form>
    </WithLoader>
  );
};

loginForm.propTypes = {
  login: func.isRequired,
  error: string,
  isLoading: bool,
  onCloseModal: func,
  resetAuthError: func.isRequired
};

loginForm.defaultProps = {
  error: null,
  isLoading: false,
  onCloseModal: () => null
};

const mapStateToProps = state => ({
  error: getErrorAuthState(state),
  isLoading: getIsLoadingAuthState(state)
});

export default connect(
  mapStateToProps,
  { login, resetAuthError }
)(loginForm);
