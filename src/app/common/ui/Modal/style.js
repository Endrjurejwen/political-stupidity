import styled from 'styled-components';
import {
  media,
  fixed,
  elevation,
  spacing,
  flexCenter,
  absolute,
  color
} from 'utils';

const Modal = styled.div`
  ${fixed({ x: '50%', y: '45%' })};
  transform: translate(-50%, -50%);
  ${elevation[3]};
  z-index: 100;
  margin: 0 auto ${spacing[0]};
  background-color: ${color.backgroundLight};
  width: 80%;
  border-radius: 8px;
  padding: ${spacing[2]} ${spacing[3]};
  max-height: 80%;
  min-height: 12rem;
  min-width: 20rem;
  overflow-y: auto;

  &.fade-enter {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translate(-50%, -50%) translateX(0);
    transition: opacity 0.3s, transform 0.3s;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
    transition: opacity 0.3s, transform 0.3s;
  }

  ${media.desktop`
    max-width: 40%;
  `}
`;

const ModalContent = styled.div`
  margin: ${spacing[3]} 0 ${spacing[2]};
  max-height: 80%;
  overflow-y: auto;
`;

const CloseButtonWrapper = styled.aside`
  ${absolute({ side: 'right' })};
  ${flexCenter};
`;

export { Modal, ModalContent, CloseButtonWrapper };

// const fadeIn = keyframes`
//   0% {
//     transform: translate(-50%, -150%) scale(0.8, 1);
//     opacity: 0;
//   }
//   }
//   100% {
//     transform: translate(-50%, -50%) scale(1);
//     opacity: 1;
//   }
// `;

// const fadeOut = keyframes`
//   0% {
//     transform: translate(-50%, -50%);
//     opacity: 1;
//   }
//   100% {
//     transform: translate(-50%, -150%) scale(0.8, 1);
//     opacity: 0;
//   }
// `;