import React from 'react';
import { withUser } from 'common/hoc';

import * as S from './style';

const toolbox = ({ children, user, id }) => (
  <S.Toolbox isDisplay={user.id === id}>{children}</S.Toolbox>
);

export default withUser(toolbox);
