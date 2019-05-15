import React from 'react';
import { Toggle, Modal } from 'app/common';
import withDelayUnmounting from './withDelayUnmounting';

// console.log(Modal);

const withToggle = ({
  modalComponent: ModalComponent,
  toggleButton: ToggleButton
}) => {
  const DelayedModal = withDelayUnmounting(Modal);
  return props => (
    <Toggle
      open={show => <ToggleButton {...props} onClick={show} />}
      content={({ hide, isShown }) => (
        <DelayedModal
          close={hide}
          isMounted={isShown}
          isShown={isShown}
          delayTime={180}
        >
          <ModalComponent {...props} closeModal={hide} />
        </DelayedModal>
      )}
    />
  );
};

export default withToggle;

// import React from 'react';

// const withToggle = WrappedComponent => {
//   return props => (
//     <div style={{ border: `1px solid red` }}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// export default withToggle;
