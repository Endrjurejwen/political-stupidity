import React, { Component } from 'react';
import styled from 'styled-components';
import { InputBox } from 'common';
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
    console.log(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Title>Logowanie</Title>
        <InputBox
          change={this.changeHandler}
          type="email"
          placeholder="Twój email"
          id="email"
          required
        />
        <InputBox
          change={this.changeHandler}
          type="password"
          placeholder="Twoje hasło"
          id="password"
          required
        />
        <Button type="submit">Zaloguj się</Button>
      </Form>
    );
  }
}

export default Login;

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
