import React from 'react';
import styled from 'styled-components';
import { spacing } from 'utils';
import { InputWithLabel, H1 } from 'elements';

const createQuotation = () => (
  <div>
    <Title>Create Quotation</Title>
    <Form>
      <InputWithLabel placeholder="Twój nick" id="nick" required />
      <InputWithLabel type="email" placeholder="Email" id="mail" required />
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
