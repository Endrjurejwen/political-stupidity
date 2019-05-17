import React from 'react';
import { func } from 'prop-types';
import * as S from 'elements';
import { color } from 'utils';

const DeleteButton = ({ onClick }) => (
  <S.IconButton data-testid="button-close" onClick={onClick}>
    Usuń
    <S.Icon name="delete" color={color.textSecondary} />
  </S.IconButton>
);

DeleteButton.propTypes = {
  onClick: func
};

DeleteButton.defaultProps = {
  onClick: () => null
};

export default DeleteButton;
