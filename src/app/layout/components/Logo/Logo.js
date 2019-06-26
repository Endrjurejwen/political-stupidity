import React from 'react';

import ROUTES_NAMES from 'app/pages/Routes/routesNames';
import * as S from './style';

const logo = ({ marginAuto }) => {
  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <S.Logo marginAuto={marginAuto}>
      <S.Link to={ROUTES_NAMES.quotes} onClick={handleClick}>
        ¯\_(ツ)_/¯
      </S.Link>
    </S.Logo>
  );
};

export default logo;
