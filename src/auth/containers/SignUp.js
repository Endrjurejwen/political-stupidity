import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { WithLoader } from 'hoc';
import { InputBox, Spinner } from 'common';
import { Button, H2 } from 'elements';
import { spacing, flexCenter } from 'utils';
import { signUp } from 'auth/actions';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  static propTypes = {
    authError: PropTypes.string,
    isLoading: PropTypes.bool,
    signUp: PropTypes.func.isRequired
  };

  static defaultProps = {
    authError: null,
    isLoading: false
  };

  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.signUp(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    const { authError, isLoading } = this.props;
    return (
      <WithLoader isLoading={isLoading}>
        <Form onSubmit={this.submitHandler}>
          <Title>Rejestracja</Title>
          <InputBox
            change={this.changeHandler}
            type="text"
            placeholder="Twoje imię"
            id="firstName"
            value={firstName}
            required
          />
          <InputBox
            change={this.changeHandler}
            type="text"
            placeholder="Twoje Nazwisko"
            id="lastName"
            value={lastName}
            required
          />
          <InputBox
            change={this.changeHandler}
            type="email"
            placeholder="Twój email"
            id="email"
            value={email}
            required
          />
          <InputBox
            change={this.changeHandler}
            type="password"
            placeholder="Twoje hasło"
            id="password"
            value={password}
            minlength="6"
            required
          />
          <Button type="submit">Załóż konto</Button>
          {isLoading && <Spinner />}
          <p>{authError || null}</p>
        </Form>
      </WithLoader>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signUp
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

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
