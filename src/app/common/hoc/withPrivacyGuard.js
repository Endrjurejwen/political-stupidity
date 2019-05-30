/* eslint react/prop-types: 0 */

import React from 'react';
import { Toggle, Modal } from 'app/common';
import { withUser } from 'app/common/hoc';
import Login from 'app/auth/containers/Login';
import { CSSTransition } from 'react-transition-group';

const withPrivacyGuard = WrappedButton => {
  const withPrivacyGuardComponent = ({ user, ...props }) => {
    if (!user.id) {
      return (
        <Toggle
          open={show => <WrappedButton {...props} onClick={show} />}
          content={({ hide, isShown }) => (
            <CSSTransition
              in={isShown}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <Modal onCloseModal={hide} isShown={isShown}>
                <Login onCloseModal={hide} />
              </Modal>
            </CSSTransition>
          )}
        />
      );
    }
    return <WrappedButton {...props} />;
  };

  return withUser(withPrivacyGuardComponent);
};

export default withPrivacyGuard;
