import React from 'react';
import { func } from 'prop-types';
import * as S from 'elements';

const CloseButton = ({ onClick }) => (
  <S.IconButton data-testid="button-close" onClick={onClick}>
    Zamknij
    <S.Icon name="close" width="1.4em" height="1.4em" />
  </S.IconButton>
);

CloseButton.propTypes = {
  onClick: func
};

CloseButton.defaultProps = {
  onClick: () => null
};

export default CloseButton;
