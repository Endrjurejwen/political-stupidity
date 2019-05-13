import React from 'react';
import { element } from 'prop-types';
import Toolbar from 'app/layout/components/Toolbar';

import * as S from './style';

const layout = ({ children }) => (
  <>
    <Toolbar />
    <S.Wrapper data-testid="layout-wrapper">{children}</S.Wrapper>
  </>
);

layout.propTypes = {
  children: element
};

layout.defaultProps = {
  children: null
};

export default layout;
