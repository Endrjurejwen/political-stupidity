import React from 'react';
import { func } from 'prop-types';
import * as S from 'elements';

const DeleteButton = ({ click }) => (
  <S.IconButton data-testid="button-close" onClick={click}>
    Usuń
    <S.Icon name="delete" />
  </S.IconButton>
);

DeleteButton.propTypes = {
  click: func
};

DeleteButton.defaultProps = {
  click: () => null
};

export default DeleteButton;
