import React from 'react';
import styled from 'styled-components';
import { element } from 'prop-types';

import { navigationHeight, bodyMaxWidth, elevation, spacing } from 'utils';

import Toolbar from 'layout/containers/Toolbar';

const layout = ({ children }) => (
  <>
    <Toolbar />
    <Wrapper data-testid="layout-wrapper">{children}</Wrapper>
  </>
);

layout.propTypes = {
  children: element
};

layout.defaultProps = {
  children: null
};

export default layout;

const Wrapper = styled.div`
  position: relative;
  ${elevation[5]};
  padding: ${spacing[4]};
  margin: ${navigationHeight} auto 0;
  background-color: #eee;
  min-height: calc(
    150vh - ${navigationHeight}
  ); // z mniejszą wysokoścją pojawiają się przeskoki przy reload
  max-width: ${bodyMaxWidth};
`;
