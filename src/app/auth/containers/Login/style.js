import styled from 'styled-components';
import { Button, H2 } from 'elements';
import { spacing, flexCenter } from 'utils';

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

export { Title, Form, Button };
