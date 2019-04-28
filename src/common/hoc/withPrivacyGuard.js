import React from 'react';
import { Toggle, Modal } from 'common';
import { withUser } from 'common/hoc';
import Login from 'auth/containers/Login';

const withPrivacyGuard = WrappedButton => {
  const withPrivacyGuardComponent = ({ user, ...props }) => {
    if (!user.id) {
      return (
        <Toggle
          open={show => <WrappedButton {...props} onClick={show} />}
          content={hide => (
            <Modal close={hide}>
              <Login closeModal={hide} />
            </Modal>
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
// import { Toggle, Modal } from 'common';
// import { withUser } from 'common/hoc';
// import Login from 'auth/containers/Login';

// const withPrivacyGuard = WrappedButton => {
//   const withPrivacyGuardComponent = props => {
//     if (!props.user.id) {
//       return (
//         <Toggle
//           open={show => <WrappedButton {...props} click={show} />}
//           content={hide => (
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
