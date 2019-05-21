import React, { useState } from 'react';
import { string, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'app/auth/selectors';
import { InputBox, Spinner, WithLoader } from 'app/common';
import { signUp, resetAuthError } from 'app/auth/actions';
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
    email: '',
    password: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    signUp(newCredentials);
    setNewCredentials({
      firstName: '',
      lastName: '',
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
    <WithLoader isLoading={isLoading}>
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

// import React, { useState } from 'react';
// import { string, bool, func } from 'prop-types';
// import { connect } from 'react-redux';
// import { getErrorAuthState, getIsLoadingAuthState } from 'app/auth/selectors';
// import { InputBox, Spinner, WithLoader } from 'app/common';
// import { signUp, resetAuthError } from 'app/auth/actions';
// import AuthErrorHandler from 'app/auth/components/AuthErrorHandler';
// import { spacing } from 'utils';

// import * as S from 'elements';

// export const signUpForm = ({ signUp, resetAuthError, error, isLoading }) => {
//   const [newCredenials, setNewCredentials] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });

//   const handleSubmit = event => {
//     event.preventDefault();
//     signUp(newCredenials);
//     setNewCredentials({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: ''
//     });
//   };

//   const handleChange = ({ target: { name, value } }) => {
//     setNewCredentials({
//       ...newCredenials,
//       [name]: value
//     });
//   };

//   const { firstName, lastName, email, password } = newCredenials;
//   return (
//     <WithLoader isLoading={isLoading}>
//       <S.H2 center marginBottom={spacing[4]}>
//         Rejestracja
//       </S.H2>
//       <S.Form onSubmit={handleSubmit}>
//         <InputBox
//           autoFocus
//           change={handleChange}
//           type="text"
//           placeholder="Twoje imię"
//           id="firstName"
//           value={firstName}
//           required
//         />
//         <InputBox
//           change={handleChange}
//           type="text"
//           placeholder="Twoje Nazwisko"
//           id="lastName"
//           value={lastName}
//           required
//         />
//         <InputBox
//           change={handleChange}
//           type="email"
//           placeholder="Twój email"
//           id="email"
//           value={email}
//           required
//         />
//         <InputBox
//           change={handleChange}
//           type="password"
//           placeholder="Twoje hasło"
//           id="password"
//           value={password}
//           minlength="6"
//           required
//         />
//         <S.Button type="submit">Załóż konto</S.Button>
//         {isLoading && <Spinner />}
//         <AuthErrorHandler error={error} resetError={resetAuthError} />
//       </S.Form>
//     </WithLoader>
//   );
// };

// signUpForm.propTypes = {
//   error: string,
//   isLoading: bool,
//   resetAuthError: func.isRequired,
//   signUp: func.isRequired
// };

// signUpForm.defaultProps = {
//   error: null,
//   isLoading: false
// };

// const mapStateToProps = state => ({
//   error: getErrorAuthState(state),
//   isLoading: getIsLoadingAuthState(state)
// });

// export default connect(
//   mapStateToProps,
//   { signUp, resetAuthError }
// )(signUpForm);
