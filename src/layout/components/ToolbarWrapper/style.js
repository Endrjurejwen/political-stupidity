import styled from 'styled-components';
import {
  color,
  fixed,
  flexCenter,
  elevation,
  spacing,
  navigationHeight,
  media
} from 'utils';

const Wrapper = styled.div`
  ${fixed()};
  ${flexCenter({ justifyContent: 'space-between' })};
  ${elevation[3]};

  color: ${color.textLight};
  background-color: ${color.navigation};
  width: 100vw;
  height: ${navigationHeight};
  padding: 0 ${spacing[1]};
  z-index: 100;
  ${media.tablet`
  padding: 0 ${spacing[5]};
  `}
`;

export { Wrapper };
