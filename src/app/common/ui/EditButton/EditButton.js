import React from 'react';
import { func } from 'prop-types';
import * as S from 'elements';

const EditButton = ({ onClick }) => (
  <S.IconButton
    className="button-edit"
    data-testid="button-edit"
    onClick={onClick}
  >
    Edytuj
    <S.Icon name="edit" />
  </S.IconButton>
);

EditButton.propTypes = {
  onClick: func
};

EditButton.defaultProps = {
  onClick: () => null
};

export default EditButton;
