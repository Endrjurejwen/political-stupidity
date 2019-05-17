import styled from 'styled-components';
import { IconButton, Icon } from 'elements';
import { media, hidden, color } from 'utils';

const LogoutButton = styled(IconButton)`
  span {
    ${hidden};
  }

  svg g path {
    transition: fill 0.15s ease-in-out;
  }

  &:hover svg g path {
    fill: ${color.secondary};
  }

  ${media.tablet`

  `}
`;

export { LogoutButton, Icon };
