import React from 'react';
import styled from 'styled-components';
import { spacing } from 'utils';
import { InputBox, TextareaBox } from 'common';
import { H1 } from 'elements';

const createQuotation = () => (
  <div>
    <Title>Create Quotation</Title>
    <Form>
      <TextareaBox
        placeholder="Tutaj wpisz cytaty"
        rows="5"
        id="quotes"
        required
      />
      <InputBox placeholder="Autor" id="author" required />
    </Form>
  </div>
);
export default createQuotation;

const Title = styled(H1)`
  text-align: center;
`;

const Form = styled.form`
  max-width: 20rem;
  margin: ${spacing[4]} auto 0;
`;
