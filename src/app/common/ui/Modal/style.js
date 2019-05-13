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

  ${media.tablet`
    /* width: auto; */
    /* max-width: 50%; */
  `}

  ${media.desktop`
    /* width: auto; */
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
