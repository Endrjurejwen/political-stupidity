import styled from 'styled-components';
import { Button, H6 } from 'elements';
import { spacing } from 'utils';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${spacing[4]} auto 0;
`;

const InputsList = styled.ul`
  margin-bottom: ${spacing[3]};
  display: flex;
  flex-wrap: wrap;
`;

export { Form, InputsList, Button, H6 };
