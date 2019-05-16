import React from 'react';
import { func, bool } from 'prop-types';
// import { Toggle, Modal } from 'app/common';
// import Login from 'app/auth/containers/Login';

import * as S from './style';

const loginButton = ({ isDesktop, isFixed, onCloseMenu, onClick }) => {
  const handleClick = () => {
    onClick();
    onCloseMenu();
  };
  return (
    <S.ActionButton
      isDesktop={isDesktop}
      isFixed={isFixed}
      onClick={handleClick}
    >
      Zaloguj się
    </S.ActionButton>
  );
};

loginButton.propTypes = {
  isDesktop: bool,
  isFixed: bool,
  onClick: func,
  onCloseMenu: func
};

loginButton.defaultProps = {
  isDesktop: false,
  isFixed: false,
  onClick: () => null,
  onCloseMenu: () => null
};

export default loginButton;

// import React from 'react';
// import { func, bool } from 'prop-types';
// import { Toggle, Modal } from 'app/common';
// import Login from 'app/auth/containers/Login';

// import * as S from './style';

// const loginButton = ({ desktop, fixed, closeMenu }) => (
//   <Toggle
//     open={show => (
//       <S.ActionButton
//         desktop={desktop}
//         fixed={fixed}
//         onClick={() => {
//           show();
//           closeMenu();
//         }}
//       >
//         Zaloguj się
//       </S.ActionButton>
//     )}
//     content={({ hide, isShown }) => (
//       <Modal close={hide} isShown={isShown}>
//         <Login closeModal={hide} />
//       </Modal>
//     )}
//   />
// );

// loginButton.propTypes = {
//   desktop: bool,
//   fixed: bool,
//   closeMenu: func
// };

// loginButton.defaultProps = {
//   desktop: false,
//   fixed: false,
//   closeMenu: () => null
// };

// export default loginButton;
