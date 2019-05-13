import React from 'react';
import { shape, string } from 'prop-types';

import * as S from './style';

const author = ({ credentials: { firstName, lastName } }) => (
  <S.AuthorContainer data-testid="quotation-user">
    Opublikował {firstName} {lastName}
  </S.AuthorContainer>
);

author.propTypes = {
  credentials: shape({
    firstName: string,
    lastName: string
  }).isRequired
};

export default author;
