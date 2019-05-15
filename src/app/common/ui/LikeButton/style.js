import styled, { keyframes, css } from 'styled-components';
import { Icon } from 'elements';
import { spacing, color, flexCenter } from 'utils';

const like = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

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
    transition: transform 0.1s;

    g path {
      fill: ${({ full }) => (full ? color.action : 'transparent')};
    }
  }

  & svg {
    /* animation: ${like} 0.8s ease; */
    animation: ${({ full }) =>
      full
        ? css`
            ${like} 0.5s ease
          `
        : null};
  }

  &:hover svg g path {
    transition: 0.2s fill ease;
    fill: ${color.action};
  }
`;

export { LikeButton, Icon };
