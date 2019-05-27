import React from 'react';

import * as S from './style';

const logo = () => {
  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <S.Link to="/quotes" onClick={handleClick}>
      ¯\_(ツ)_/¯
    </S.Link>
  );
};

export default logo;
