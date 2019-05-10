import React from 'react';
import { arrayOf, oneOfType, element, bool } from 'prop-types';

import * as S from './style';

const toolbarWrapper = ({ children }) => (
  <S.Wrapper data-testid="toolbar-wrapper">{children}</S.Wrapper>
);

toolbarWrapper.propTypes = {
  children: arrayOf(oneOfType([element, bool])).isRequired
};

export default toolbarWrapper;
