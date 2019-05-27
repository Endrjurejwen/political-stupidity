import React from 'react';
import { shape, string } from 'prop-types';

import * as S from './style';

const author = ({ credentials: { nick } }) => (
  <S.AuthorContainer data-testid="quotation-user">
    Opublikował {nick}
  </S.AuthorContainer>
);

author.propTypes = {
  credentials: shape({
    nick: string
  }).isRequired
};

export default author;
