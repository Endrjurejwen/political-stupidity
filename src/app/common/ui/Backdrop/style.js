import styled, { css, keyframes } from 'styled-components';
import { fixed, color } from 'utils';

const fadeIn = keyframes`
  0% { 
    opacity: 0; 
  }
  100% { 
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% { 
    opacity: 1; 
  }
  100% { 
    opacity: 0; 
  }
`;

const Backdrop = styled.div`
  ${fixed()};
  transition: opacity 1s;
  opacity: ${props => (props.isAnimated ? 1 : 0)};
  width: 100vw;
  height: 100vh;
  background-color: ${color.backdrop};
  z-index: 20;

  animation: ${({ isAnimated }) =>
    isAnimated
      ? css`
          ${fadeIn} 0.25s ease-in-out
        `
      : css`
          ${fadeOut} 0.25s ease-in-out
        `};
`;

export { Backdrop };
