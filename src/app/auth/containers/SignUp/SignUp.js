import React, { useState } from 'react';
import { string, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'app/auth/selectors';
import { InputBox, Spinner, WithLoader } from 'app/common';
import { resetAuthError } from 'app/auth/actions';
import { signUp } from 'app/auth/operations';
import AuthErrorHandler from 'app/auth/components/AuthErrorHandler';
import { spacing } from 'utils';

import * as S from 'elements';

const INPUTS_CONFIG = [
  { type: 'text', placeholder: 'Twoje imię', id: 'firstName', autoFocus: true },
  {
    type: 'text',
    placeholder: 'Twoje nazwisko',
    id: 'lastName',
    autoFocus: false
  },
  { type: 'text', placeholder: 'Twój Nick', id: 'nick', autoFocus: false },
  { type: 'email', placeholder: 'Twój email', id: 'email', autoFocus: false },
  {
    type: 'password',
    placeholder: 'Twoje hasło',
    id: 'password',
    autoFocus: false
  }
];

export const signUpForm = ({ signUp, resetAuthError, error, isLoading }) => {
  const [newCredentials, setNewCredentials] = useState({
    firstName: '',
    lastName: '',
    nick: '',
    email: '',
    password: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    signUp(newCredentials);
    setNewCredentials({
      firstName: '',
      lastName: '',
      nick: '',
      email: '',
      password: ''
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setNewCredentials({
      ...newCredentials,
      [name]: value
    });
  };

  return (
    <WithLoader isLoading={isLoading} bgColor="#F4F4F4">
      <S.H2 center marginBottom={spacing[4]}>
        Rejestracja
      </S.H2>
      <S.Form onSubmit={handleSubmit}>
        {INPUTS_CONFIG.map(({ type, placeholder, id, autoFocus }) => (
          <InputBox
            key={id}
            autoFocus={autoFocus}
            change={handleChange}
            type={type}
            placeholder={placeholder}
            id={id}
            value={newCredentials[id]}
            required
          />
        ))}
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
