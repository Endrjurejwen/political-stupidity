import styled from 'styled-components';
import { color, flexCenter, spacing } from 'utils';

import { InlineButton } from 'elements';

const ReturnButton = styled(InlineButton)`
  font-weight: initial;
  color: ${color.textLight};
  text-transform: initial;
  font-size: 0.85rem;
  margin-right: auto;
  ${flexCenter()};
  position: relative;
  padding-left: ${spacing[3]};
  transition: color 0.15s ease-in-out;

  &:hover {
    color: ${color.secondary};
  }

  span::before {
    color: ${color.textLight};
    background-color: ${color.navigation};
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    content: '';
    display: inline-block;
    height: 0.6em;
    left: 0.15em;
    position: relative;
    top: 0.25em;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 0.6em;

    left: -0.5rem;
    transform: rotate(-135deg);
    transition: color 0.15s ease-in-out;
  }

  &:hover span::before {
    color: ${color.secondary};
  }
`;

export { ReturnButton };
