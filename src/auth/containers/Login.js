import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'auth/selectors';
import { login } from 'auth/actions';
import { InputBox, WithLoader } from 'common';
import { Button, H2 } from 'elements';
import { spacing, flexCenter } from 'utils';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  static propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool,
    actions: PropTypes.shape({
      login: PropTypes.func.isRequired
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
    this.props.actions.login(this.state);
    this.setState({
      email: '',
      password: '',
      loading: false
    });
  };

  render() {
    const { email, password } = this.state;
    const { error, isLoading } = this.props;
    return (
      <WithLoader isLoading={isLoading}>
        <Form onSubmit={this.handleSubmit}>
          <Title>Logowanie</Title>
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
            required
          />
          <Button type="submit">Zaloguj się</Button>
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
        login
      },
      dispatch
    )
  };
};

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
