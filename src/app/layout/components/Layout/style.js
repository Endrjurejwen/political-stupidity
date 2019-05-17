import styled from 'styled-components';
import {
  navigationHeight,
  bodyMaxWidth,
  elevation,
  spacing,
  media,
  color
} from 'utils';

const Wrapper = styled.div`
  position: relative;
  /* ${elevation[5]}; */
  padding: ${spacing[4]} ${spacing[1]};
  margin: ${navigationHeight} auto 0;
  background-color: ${color.layout};
  min-height: calc(
    150vh - ${navigationHeight}
  ); // z mniejszą wysokoścją pojawiają się przeskoki przy reload
  max-width: ${bodyMaxWidth};

  /* position: absolute;
  left: 50%;
  top: 0x;
  transform: translateX(-50%); */

  /* &.fade-appear,
  &.fade-enter {
      opacity: 0;
      z-index: 1;
  }
  &.fade-appear-active,
  &.fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 300ms linear 150ms;
  }

  &.fade-exit {
      opacity: 1;
  }

  &.fade-exit.fade-exit-active {
      opacity: 0;
      transition: opacity 150ms linear;
  } */

  ${media.phone`
    padding: ${spacing[4]};
  `}
`;

export { Wrapper };
