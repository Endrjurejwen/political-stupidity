import React from 'react';
import { func, string } from 'prop-types';

import * as S from './style';

const navigationItem = ({ name, path, onCloseMenu }) => (
  <S.NavigationItem>
    <S.Link data-testid="link" onClick={onCloseMenu} to={path}>
      {name}
    </S.Link>
  </S.NavigationItem>
);

navigationItem.propTypes = {
  name: string,
  path: string,
  onCloseMenu: func
};

navigationItem.defaultProps = {
  name: 'Link',
  path: '/',
  onCloseMenu: () => {}
};

export default navigationItem;
