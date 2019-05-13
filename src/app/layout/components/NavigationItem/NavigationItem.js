import React from 'react';
import { func, string } from 'prop-types';

import * as S from './style';

const navigationItem = ({ name, path, closeMenu }) => (
  <S.NavigationItem>
    <S.Link data-testid="link" onClick={closeMenu} to={path}>
      {name}
    </S.Link>
  </S.NavigationItem>
);

navigationItem.propTypes = {
  closeMenu: func,
  name: string,
  path: string
};

navigationItem.defaultProps = {
  closeMenu: () => {},
  name: 'Link',
  path: '/'
};

export default navigationItem;
