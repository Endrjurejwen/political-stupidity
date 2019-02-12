import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  color,
  fixed,
  flexCenter,
  elevation,
  spacing,
  navigationHeight
} from 'utils';

const toolbarWrapper = ({ children }) => (
  <Wrapper data-testid="toolbar-wrapper">{children}</Wrapper>
);

toolbarWrapper.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
  ).isRequired
};

export default toolbarWrapper;

const Wrapper = styled.div`
  ${fixed()};
  ${flexCenter({ justifyContent: 'space-between' })};
  ${elevation[3]};

  color: ${color.textLight};
  background-color: ${color.primary};
  width: 100vw;
  height: ${navigationHeight};
  padding: 0 ${spacing[3]};
`;
