import React from 'react';
import { func, string } from 'prop-types';

import * as S from './style';

const navigationItem = ({ name, path, onCloseMenu }) => {
  const handleClick = () => {
    onCloseMenu();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <S.NavigationItem>
      <S.Link data-testid="link" onClick={handleClick} to={path}>
        {name}
      </S.Link>
    </S.NavigationItem>
  );
};

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

// import React from 'react';
// import { func, string } from 'prop-types';

// import * as S from './style';

// const navigationItem = ({ name, path, onCloseMenu }) => (
//   <S.NavigationItem>
//     <S.Link data-testid="link" onClick={onCloseMenu} to={path}>
//       {name}
//     </S.Link>
//   </S.NavigationItem>
// );

// navigationItem.propTypes = {
//   name: string,
//   path: string,
//   onCloseMenu: func
// };

// navigationItem.defaultProps = {
//   name: 'Link',
//   path: '/',
//   onCloseMenu: () => {}
// };

// export default navigationItem;
