import React from 'react';
import { history } from 'react-router-prop-types';
import { bool, func } from 'prop-types';
import { withRouter } from 'react-router-dom';

import * as S from './style';

const createQuotationButton = ({
  isDesktop,
  isExtended,
  onCloseMenu,
  history,
  onClick
}) => {
  const handleClick = () => {
    history.push('/quotes');
    onClick();
    onCloseMenu();
  };
  return (
    <S.ActionButton
      isDesktop={isDesktop}
      isExtended={isExtended}
      onClick={handleClick}
    >
      <S.Cross />
      {(isDesktop || isExtended) && <S.Label>Dodaj Cytat</S.Label>}
    </S.ActionButton>
  );
};

createQuotationButton.propTypes = {
  history: history.isRequired,
  isDesktop: bool,
  isExtended: bool,
  onClick: func,
  onCloseMenu: func
};

createQuotationButton.defaultProps = {
  isDesktop: false,
  isExtended: false,
  onClick: () => null,
  onCloseMenu: () => null
};

export default withRouter(createQuotationButton);
