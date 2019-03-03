import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'auth/actions';
import { InputBox, Spinner } from 'common';
import { Button, H2 } from 'elements';
import { spacing, flexCenter } from 'utils';

class Login extends Component {
  state = {
    email: '',
    password: ''
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
        {isLoading && <Spinner />}
        <p>{authError || null}</p>
      </Form>
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
