import React, { useRef } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { spacing, flexCenter } from 'utils';
import { InputBox, TextareaBox, useAutoFocus } from 'common';
import { Button } from 'elements';

const quotationForm = ({
  onQuotationSubmit,
  onContentChange,
  onPoliticianChange,
  buttonLabel,
  content,
  politician
}) => {
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  return (
    <Form onSubmit={onQuotationSubmit}>
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
  buttonLabel: string,
  content: string,
  onQuotationSubmit: func.isRequired,
  onContentChange: func.isRequired,
  onPoliticianChange: func.isRequired,
  politician: string
};

quotationForm.defaultProps = {
  buttonLabel: 'Opublikuj',
  content: '',
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
