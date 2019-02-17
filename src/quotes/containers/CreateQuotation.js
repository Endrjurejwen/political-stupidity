import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createQuotation } from 'dashboard/actions';
import { spacing, flexCenter } from 'utils';
import { InputBox, TextareaBox } from 'common';
import { H2, Button } from 'elements';

class CreateQuotation extends Component {
  state = {
    quotation: '',
    author: ''
  };

  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.createQuotation(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Title>Stwórz cytat</Title>
        <TextareaBox
          onChange={this.changeHandler}
          placeholder="Tutaj wpisz cytat"
          rows="5"
          cols="30"
          id="quotation"
          required
        />
        <InputBox
          onChange={this.changeHandler}
          placeholder="Autor cytatu"
          id="author"
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

export default connect(
  null,
  mapDispatchToProps
)(CreateQuotation);

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
