import styled from 'styled-components';
import { Icon } from 'elements';
import { spacing, color, flexCenter } from 'utils';

const LikeButton = styled.button`
  color: ${color.action};
  ${flexCenter};
  font-size: 0.9rem;
  padding: ${spacing[1]} ${spacing[2]};

  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;

  svg {
    margin: 0 ${spacing[0]} 0 0;

    g path {
      fill: ${({ full }) => (full ? color.action : 'transparent')};
    }
  }

  &:hover svg g path {
    transition: 0.2s fill ease;
    fill: ${color.action};
  }
`;

export { LikeButton, Icon };
