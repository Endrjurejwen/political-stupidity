import React, { useState, useRef } from 'react';
import { shape, func, bool, string } from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createQuotation, editQuotation } from 'quotes/actions';
import { getIsLoadingState } from 'quotes/selectors';
import { quotationType } from 'quotes/propTypes';
import { spacing, flexCenter } from 'utils';
import { InputBox, TextareaBox, WithLoader, useAutoFocus } from 'common';
import { H2, Button } from 'elements';

const quotationForm = ({
  onQuotationSubmit,
  onContentChange,
  onPoliticianChange,
  isLoading,
  buttonLabel,
  content,
  politician
}) => {
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  return (
    <Form onSubmit={onQuotationSubmit}>
      {/* <H2 center marginBottom={spacing[4]}>
        {isEditForm ? 'Edytuj cytat' : 'Stwórz cytat'}
      </H2> */}
      <TextareaBox
        marginBottom={spacing[3]}
        ref={autoFocusRef}
        onChange={event => onContentChange(event.target.value)}
        placeholder="Tutaj wpisz cytat"
        cols="30"
        id="content"
        value={content}
        required
      />
      <InputBox
        onChange={event => onPoliticianChange(event.target.value)}
        placeholder="Autor cytatu"
        id="politician"
        value={politician}
        required
      />
      <Button type="submit">{buttonLabel}</Button>
    </Form>
  );
};

quotationForm.propTypes = {
  content: string,
  isEditForm: bool,
  isLoading: bool,
  politician: string
};

quotationForm.defaultProps = {
  content: '',
  isEditForm: false,
  isLoading: false,
  politician: ''
};

export default quotationForm;

const Form = styled.form`
  /* max-width: 30rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* ${flexCenter}; */
  /* flex-direction: column; */
  
  margin: ${spacing[4]} auto 0;
`;
