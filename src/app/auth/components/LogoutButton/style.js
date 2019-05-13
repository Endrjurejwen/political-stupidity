import styled from 'styled-components';
import { Button } from 'elements';
import { spacing } from 'utils';

const LogOutButton = styled(Button)`
  box-shadow: none;
  font-size: 0.7rem;
  font-weight: normal;
  font-family: inherit;
  color: #fff;
  display: block;
  font-size: 0.9rem;
  padding: ${spacing[1]} ${spacing[2]};

  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
`;

export { LogOutButton };
