import styled from 'styled-components';
import { Button } from 'elements';
import { media } from 'utils';

const ActionButton = styled(Button)`
  position: ${props => (props.isFixed ? 'fixed' : 'static')};
  bottom: 1rem;
  left: 50%;
  transform: ${props => props.isFixed && 'translateX(-50%)'};
  display: ${({ isDesktop }) => (isDesktop ? 'none' : 'block')};
  z-index: 2;

  ${media.tablet`
    display: ${({ isDesktop }) => (isDesktop ? 'block' : 'none')};
  `}
`;

export { ActionButton };
