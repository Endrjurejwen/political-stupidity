import React from 'react';
import { string } from 'prop-types';
import { Icon } from 'elements';
import { color } from 'utils';

import * as S from './style';

const userSummary = ({ name }) => (
  <S.Wrapper>
    <p data-testid="user-name">{name}</p>
    <Icon name="userMan" color={color.textLight} />
  </S.Wrapper>
);

userSummary.propTypes = {
  name: string
};

userSummary.defaultProps = {
  name: ''
};

export default userSummary;
