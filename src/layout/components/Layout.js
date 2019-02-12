import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { navigationHeight, bodyMaxWidth, elevation, spacing } from 'utils';

import Toolbar from 'layout/containers/Toolbar';

const layout = ({ children }) => (
  <>
    <Toolbar />
    <Wrapper data-testid="layout-wrapper">{children}</Wrapper>
  </>
);

layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
};

layout.defaultProps = {
  children: []
};

export default layout;

const Wrapper = styled.div`
  ${elevation[5]};
  padding: ${spacing[4]};
  margin: ${navigationHeight} auto 0;
  background-color: green;
  min-height: calc(100vh - ${navigationHeight});
  max-width: ${bodyMaxWidth};
`;
