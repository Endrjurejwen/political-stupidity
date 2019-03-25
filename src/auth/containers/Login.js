import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WithLoader } from 'hoc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'auth/actions';
import { InputBox } from 'common';
import { Button, H2 } from 'elements';
import { spacing, flexCenter } from 'utils';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  static propTypes = {
    authError: PropTypes.string,
    isLoading: PropTypes.bool,
    login: PropTypes.func.isRequired
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
    this.props.login(this.state);
    this.setState({
      email: '',
      password: '',
      loading: false
    });
  };

  render() {
    const { email, password } = this.state;
    const { authError, isLoading } = this.props;
    return (
      <WithLoader isLoading={isLoading}>
        <Form onSubmit={this.submitHandler}>
          <Title>Logowanie</Title>
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
            required
          />
          <Button type="submit">Zaloguj się</Button>
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
      login
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

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
