import React, { Component, useState } from 'react';
import { string, bool, shape, func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getErrorAuthState, getIsLoadingAuthState } from 'auth/selectors';
import { login } from 'auth/actions';
import { InputBox, WithLoader } from 'common';
import { Button, H2 } from 'elements';
import { spacing, flexCenter } from 'utils';

const ErrorMessage = ({ error }) => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <div>
      <p>{error}</p>
      <Button onClick={() => setIsOpen(false)}>close</Button>
    </div>
  ) : null;
};

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  static propTypes = {
    actions: shape({
      login: func.isRequired
    }).isRequired,
    error: string,
    isLoading: bool,
    closeModal: func
  };

  static defaultProps = {
    error: null,
    isLoading: false,
    closeModal: () => null
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    const { actions, closeModal } = this.props;
    event.preventDefault();
    actions.login(this.state).then(res => res && closeModal());
    this.setState({
      email: '',
      password: '',
      loading: false
    });
  };

  // handleCloseErrorMessage = () => {
  //   this.setState({
  //     isErrorInfoShown: false
  //   });
  // };

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
          {/* <p>{error || null}</p> */}
          {error && <ErrorMessage error={error} />}
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
