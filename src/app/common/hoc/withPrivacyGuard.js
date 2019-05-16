import React from 'react';
import { Toggle, Modal } from 'app/common';
import { withUser, withDelayUnmounting } from 'app/common/hoc';
import Login from 'app/auth/containers/Login';

const withPrivacyGuard = WrappedButton => {
  const withPrivacyGuardComponent = ({ user, ...props }) => {
    const ModalWithDelay = withDelayUnmounting(Modal);
    if (!user.id) {
      return (
        <Toggle
          open={show => <WrappedButton {...props} onClick={show} />}
          content={({ hide, isShown }) => (
            <ModalWithDelay
              close={hide}
              isMounted={isShown}
              isShown={isShown}
              delayTime={250}
            >
              <Login closeModal={hide} />
            </ModalWithDelay>
          )}
        />
      );
    }
    return <WrappedButton {...props} />;
  };

  return withUser(withPrivacyGuardComponent);
};

export default withPrivacyGuard;


// import React from 'react';
// import { Toggle, Modal } from 'app/common';
// import { withUser } from 'app/common/hoc';
// import Login from 'app/auth/containers/Login';

// const withPrivacyGuard = WrappedButton => {
//   const withPrivacyGuardComponent = ({ user, ...props }) => {
//     if (!user.id) {
//       return (
//         <Toggle
//           open={show => <WrappedButton {...props} onClick={show} />}
//           content={({ hide, isShown }) => isShown && (
//             <Modal close={hide}>
//               <Login closeModal={hide} />
//             </Modal>
//           )}
//         />
//       );
//     }
//     return <WrappedButton {...props} />;
//   };

//   return withUser(withPrivacyGuardComponent);
// };

// export default withPrivacyGuard;