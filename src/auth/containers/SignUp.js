import React, { useState } from 'react';
import { string, bool, func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'auth/selectors';
import { InputBox, Spinner, WithLoader } from 'common';
import { Button, H2 } from 'elements';
import { spacing, flexCenter } from 'utils';
import { signUp, resetAuthError } from 'auth/actions';
import AuthErrorHandler from 'auth/components/AuthErrorHandler';

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
      <Form onSubmit={handleSubmit}>
        <Title>Rejestracja</Title>
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
        <Button type="submit">Załóż konto</Button>
        {isLoading && <Spinner />}
        <AuthErrorHandler error={error} resetError={resetAuthError} />
      </Form>
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

const Title = styled(H2)`
  text-align: center;
  margin-bottom: ${spacing[4]};
`;

const Form = styled.form`
  ${flexCenter};
  flex-direction: column;
  /* max-width: 35rem; */
  margin: ${spacing[4]} auto 0;
`;
