import React from 'react';
import { func } from 'prop-types';
import * as S from 'elements';

const CloseButton = ({ click }) => (
  <S.IconButton data-testid="button-close" onClick={click}>
    <S.Icon name="close" width="1.4em" height="1.4em" />
  </S.IconButton>
);

CloseButton.propTypes = {
  click: func
};

CloseButton.defaultProps = {
  click: () => null
};

export default CloseButton;
