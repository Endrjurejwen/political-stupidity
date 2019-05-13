import styled from 'styled-components';
import { Button, H3 } from 'elements';
import { spacing } from 'utils';

const InputsWrapper = styled.div`
  margin-bottom: ${spacing[3]};
  display: flex;
  flex-wrap: wrap;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { InputsWrapper, Form, Button, H3 };
