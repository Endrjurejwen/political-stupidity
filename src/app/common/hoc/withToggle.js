import React from 'react';
import { Toggle, Modal } from 'app/common';
import { CSSTransition } from 'react-transition-group';

const withToggle = ({
  modalComponent: ModalComponent,
  toggleButton: ToggleButton
}) => {
  return props => (
    <Toggle
      open={show => <ToggleButton {...props} onClick={show} />}
      content={({ hide, isShown }) => (
        <CSSTransition
          in={isShown}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Modal onCloseModal={hide} isShown={isShown}>
            <ModalComponent {...props} onCloseModal={hide} />
          </Modal>
        </CSSTransition>
      )}
    />
  );
};

export default withToggle;

// import React from 'react';
// import { Toggle, Modal } from 'app/common';
// import withDelayUnmounting from './withDelayUnmounting';

// const withToggle = ({
//   modalComponent: ModalComponent,
//   toggleButton: ToggleButton
// }) => {
//   const DelayedModal = withDelayUnmounting(Modal);
//   return props => (
//     <Toggle
//       open={show => <ToggleButton {...props} onClick={show} />}
//       content={({ hide, isShown }) => (
//         <DelayedModal
//           close={hide}
//           isMounted={isShown}
//           isShown={isShown}
//           delayTime={250}
//         >
//           <ModalComponent {...props} closeModal={hide} />
//         </DelayedModal>
//       )}
//     />
//   );
// };

// export default withToggle;
