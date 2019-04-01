import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import { history } from 'react-router-prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createQuotation } from 'quotes/actions';
import { spacing, flexCenter } from 'utils';
import { InputBox, TextareaBox } from 'common';
import { H2, Button } from 'elements';

class CreateQuotation extends Component {
  state = {
    content: '',
    politician: ''
  };

  static propTypes = {
    actions: shape({
      createQuotation: func.isRequired
    }).isRequired,
    history: history.isRequired
  };

  hadleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    const { actions, history } = this.props;
    event.preventDefault();
    actions.createQuotation(this.state);
    this.setState({
      content: '',
      politician: ''
    });
    history.push('/quotes');
  };

  render() {
    const { content, politician } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Stwórz cytat</Title>
        <TextareaBox
          onChange={this.hadleChange}
          placeholder="Tutaj wpisz cytat"
          rows="5"
          cols="30"
          id="content"
          value={content}
          required
        />
        <InputBox
          onChange={this.hadleChange}
          placeholder="Autor cytatu"
          id="politician"
          value={politician}
          required
        />
        <Button type="submit">Opublikuj</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        createQuotation
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CreateQuotation)
);

const Title = styled(H2)`
  text-align: center;
  margin-bottom: ${spacing[4]};
`;

const Form = styled.form`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* ${flexCenter}; */
  /* flex-direction: column; */
  
  margin: ${spacing[4]} auto 0;
`;
