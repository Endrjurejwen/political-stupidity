import React from 'react';
import { string } from 'prop-types';
import { Icon } from 'elements';
import { color } from 'utils';

import * as S from './style';

const userSummary = ({ nick }) => (
  <S.Wrapper>
    <p data-testid="user-nick">{nick}</p>
    <Icon name="userMan" color={color.textLight} />
  </S.Wrapper>
);

userSummary.propTypes = {
  nick: string
};

userSummary.defaultProps = {
  nick: ''
};

export default userSummary;
