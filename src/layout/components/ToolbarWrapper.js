import React from 'react';
import styled from 'styled-components';
import { arrayOf, oneOfType, element, bool } from 'prop-types';

import {
  color,
  fixed,
  flexCenter,
  elevation,
  spacing,
  navigationHeight,
  media
} from 'utils';

const toolbarWrapper = ({ children }) => (
  <Wrapper data-testid="toolbar-wrapper">{children}</Wrapper>
);

toolbarWrapper.propTypes = {
  children: arrayOf(oneOfType([element, bool])).isRequired
};

export default toolbarWrapper;

const Wrapper = styled.div`
  ${fixed()};
  ${flexCenter({ justifyContent: 'space-between' })};
  /* align-itmes: baseline; */
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
