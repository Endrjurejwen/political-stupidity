import React from 'react';
import { history } from 'react-router-prop-types';
import { bool, func } from 'prop-types';
import { withRouter } from 'react-router-dom';

import * as S from './style';

const createQuotationButton = ({
  desktop,
  extended,
  closeMenu,
  history,
  onClick
}) => {
  const handleClick = () => {
    history.push('/quotes');
    onClick();
    closeMenu();
  };
  return (
    <S.ActionButton desktop={desktop} extended={extended} onClick={handleClick}>
      <S.Cross />
      {(desktop || extended) && <S.Label>Dodaj Cytat</S.Label>}
    </S.ActionButton>
  );
};

createQuotationButton.propTypes = {
  closeMenu: func,
  desktop: bool,
  extended: bool,
  history: history.isRequired
};

createQuotationButton.defaultProps = {
  closeMenu: () => null,
  desktop: false,
  extended: false
};

export default withRouter(createQuotationButton);
