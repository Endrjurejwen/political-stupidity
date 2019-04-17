import React from 'react';
import styled from 'styled-components';
import { element, bool } from 'prop-types';
import { Icon, H4 } from 'elements';
import CreateQuotationButton from 'quotes/components/CreateQuotationButton';

import { Button } from 'elements';
import { color, fixed, elevation, spacing, media, flexCenter } from 'utils';

const sideDrawer = ({
  children,
  isOpen,
  logoutButton,
  loginButton,
  createQuotationButton,
  userInfo,
  user
}) => (
  <Wrapper data-testid="sideDrawer" isOpen={isOpen}>
    <Header>
      {user.id ? (
        userInfo
      ) : (
        <H4 center textLight marginBottom={spacing[4]}>
          Klasa Polityczna
        </H4>
      )}
      {user.id && logoutButton}
    </Header>
    <NavContainer>
      {children}
      {!user.id ? loginButton : createQuotationButton}
    </NavContainer>
    <Footer>
      <p>&copy; Andrzej Kruk 2019</p>
    </Footer>
  </Wrapper>
);

sideDrawer.propTypes = {
  children: element.isRequired,
  isOpen: bool.isRequired
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

export default sideDrawer;

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
