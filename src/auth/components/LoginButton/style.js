import styled from 'styled-components';
import { Button } from 'elements';
import { media } from 'utils';

const ActionButton = styled(Button)`
  position: ${props => (props.fixed ? 'fixed' : 'static')};
  bottom: 1rem;
  left: 50%;
  transform: ${props => props.fixed && 'translateX(-50%)'};
  display: ${({ desktop }) => (desktop ? 'none' : 'block')};
  z-index: 2;

  ${media.tablet`
    display: ${({ desktop }) => (desktop ? 'block' : 'none')};
  `}
`;

export { ActionButton };
