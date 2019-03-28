import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'auth/selectors';
import { InputBox, Spinner, WithLoader } from 'common';
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
    error: PropTypes.string,
    isLoading: PropTypes.bool,
    actions: PropTypes.shape({
      signUp: PropTypes.func.isRequired
    }).isRequired
  };

  static defaultProps = {
    error: null,
    isLoading: false
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.signUp(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    const { error, isLoading } = this.props;
    return (
      <WithLoader isLoading={isLoading}>
        <Form onSubmit={this.handleSubmit}>
          <Title>Rejestracja</Title>
          <InputBox
            change={this.handleChange}
            type="text"
            placeholder="Twoje imię"
            id="firstName"
            value={firstName}
            required
          />
          <InputBox
            change={this.handleChange}
            type="text"
            placeholder="Twoje Nazwisko"
            id="lastName"
            value={lastName}
            required
          />
          <InputBox
            change={this.handleChange}
            type="email"
            placeholder="Twój email"
            id="email"
            value={email}
            required
          />
          <InputBox
            change={this.handleChange}
            type="password"
            placeholder="Twoje hasło"
            id="password"
            value={password}
            minlength="6"
            required
          />
          <Button type="submit">Załóż konto</Button>
          {isLoading && <Spinner />}
          <p>{error || null}</p>
        </Form>
      </WithLoader>
    );
  }
}

const mapStateToProps = state => ({
  error: getErrorAuthState(state),
  isLoading: getIsLoadingAuthState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        signUp
      },
      dispatch
    )
  };
};

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
