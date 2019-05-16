import React from 'react';
import { element, string, arrayOf } from 'prop-types';
import { userType } from 'app/auth/propTypes';
import { withUser } from 'app/common/hoc';

import * as S from './style';

const toolbox = ({ children, user, id }) => (
  <S.Toolbox isDisplay={user.id === id}>{children}</S.Toolbox>
);

toolbox.propTypes = {
  children: arrayOf(element),
  id: string,
  user: userType
};

toolbox.defaultProps = {
  children: null,
  id: null,
  user: null
};

export default withUser(toolbox);
