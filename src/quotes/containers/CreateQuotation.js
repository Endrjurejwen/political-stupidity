import React, { Component } from 'react';
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
    author: ''
  };

  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submitHandler = event => {
    const { createQuotation, history } = this.props;
    event.preventDefault();
    // console.log(this.state);
    createQuotation(this.state);
    this.setState({
      content: '',
      author: ''
    });
    history.push('/home');
  };

  render() {
    const { content, author } = this.state;
    return (
      <Form onSubmit={this.submitHandler}>
        <Title>Stwórz cytat</Title>
        <TextareaBox
          onChange={this.changeHandler}
          placeholder="Tutaj wpisz cytat"
          rows="5"
          cols="30"
          id="content"
          value={content}
          required
        />
        <InputBox
          onChange={this.changeHandler}
          placeholder="Autor cytatu"
          id="author"
          value={author}
          required
        />
        <Button type="submit">Opublikuj</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createQuotation
    },
    dispatch
  );

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
