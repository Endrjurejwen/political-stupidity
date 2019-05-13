import React from 'react';
import { func } from 'prop-types';
import * as S from 'elements';

const EditButton = ({ click }) => (
  <S.IconButton
    className="button-edit"
    data-testid="button-edit"
    onClick={click}
  >
    <S.Icon name="edit" />
  </S.IconButton>
);

EditButton.propTypes = {
  click: func
};

EditButton.defaultProps = {
  click: () => null
};

export default EditButton;
