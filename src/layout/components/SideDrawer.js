import React from 'react';
import styled from 'styled-components';
import { element, bool, func } from 'prop-types';
import { userType } from 'auth/propTypes';
import { H4 } from 'elements';

import { withUser } from 'common';
import { color, fixed, elevation, spacing, media, flexCenter } from 'utils';
import UserDetails from 'auth/components/UserDetails';
import CreateQuotationToggle from 'quotes/components/CreateQuotationToggle';
import LoginButton from 'auth/components/LoginButton';
import LogoutToggle from 'auth/components/LogoutToggle';

const sideDrawer = ({ children, closeMenu, isOpen, user }) => {
  let actionButton = <LoginButton closeMenu={closeMenu} />;
  let headerContent = (
    <H4 center textLight marginBottom={spacing[4]}>
      Klasa Polityczna
    </H4>
  );
  if (user.id) {
    headerContent = <UserDetails user={user} />;
    actionButton = <CreateQuotationToggle extended closeMenu={closeMenu} />;
  }
  return (
    <Wrapper data-testid="sideDrawer" isOpen={isOpen}>
      <Header>
        {headerContent}
        {user.id && <LogoutToggle closeMenu={closeMenu} />}
      </Header>
      <NavContainer>
        {children}
        {actionButton}
      </NavContainer>
      <Footer>
        <p>&copy; Andrzej Kruk 2019</p>
      </Footer>
    </Wrapper>
  );
};

sideDrawer.propTypes = {
  children: element.isRequired,
  closeMenu: func,
  isOpen: bool,
  user: userType
};

sideDrawer.defaultProps = {
  closeMenu: () => null,
  isOpen: false,
  user: null
};

const Wrapper = styled.div`
  ${fixed()};
  ${elevation[3]};
  display: flex;
  flex-direction: column;
  padding: ${spacing[2]} ${spacing[4]};
  height: 100%;
  width: 100vw;
  z-index: 30;
  background-color: ${color.navigation};
  color: ${color.textLight};
  text-align: center;

  transition: all 0.2s cubic-bezier(0.63, 0.21, 0.66, 1);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(100vw)'};

  ${media.tablet`
    display: none;
  `}
`;

const Header = styled.header`
  ${flexCenter()};
  flex-direction: column;
  padding: ${spacing[3]} 0;
`;

const NavContainer = styled.div`
  padding: ${spacing[4]} 0 ${spacing[6]};
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${color.textLight};
  border-bottom: 1px solid ${color.textLight};
  flex: 2;
`;

const Footer = styled.footer`
  ${flexCenter};
  padding: ${spacing[3]} ${spacing[5]};
`;

export default withUser(sideDrawer);

// const Wrapper = styled.div`
//   ${fixed()};
//   ${elevation[3]};
//   display: flex;
//   flex-direction: column;
//   padding: ${spacing[2]} ${spacing[4]};
//   height: 50vh;
//   width: 100vw;
//   z-index: 30;
//   background-color: ${color.primary};
//   color: ${color.textLight};
//   text-align: center;

//   transition: all 0.2s cubic-bezier(0.63, 0.21, 0.66, 1);
//   visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
//   transform: ${({ isOpen }) =>
//     isOpen ? 'translateY(0)' : 'translateY(-50vh)'};

//   ${media.tablet`
//     display: none;
//   `}
// `;

// export default sideDrawer;
