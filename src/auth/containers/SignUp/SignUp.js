import React, { useState } from 'react';
import { string, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'auth/selectors';
import { InputBox, Spinner, WithLoader } from 'common';
import { signUp, resetAuthError } from 'auth/actions';
import AuthErrorHandler from 'auth/components/AuthErrorHandler';

import * as S from './style';

const signUpForm = ({ signUp, resetAuthError, error, isLoading }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    signUp({ firstName, lastName, email, password });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <WithLoader isLoading={isLoading}>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Rejestracja</S.Title>
        <InputBox
          autoFocus
          change={event => setFirstName(event.target.value)}
          type="text"
          placeholder="Twoje imię"
          id="firstName"
          value={firstName}
          required
        />
        <InputBox
          change={event => setLastName(event.target.value)}
          type="text"
          placeholder="Twoje Nazwisko"
          id="lastName"
          value={lastName}
          required
        />
        <InputBox
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
          minlength="6"
          required
        />
        <S.Button type="submit">Załóż konto</S.Button>
        {isLoading && <Spinner />}
        <AuthErrorHandler error={error} resetError={resetAuthError} />
      </S.Form>
    </WithLoader>
  );
};

signUpForm.propTypes = {
  error: string,
  isLoading: bool,
  resetAuthError: func.isRequired,
  signUp: func.isRequired
};

signUpForm.defaultProps = {
  error: null,
  isLoading: false
};

const mapStateToProps = state => ({
  error: getErrorAuthState(state),
  isLoading: getIsLoadingAuthState(state)
});

export default connect(
  mapStateToProps,
  { signUp, resetAuthError }
)(signUpForm);
