import React from 'react';
import { Toggle, Modal } from 'app/common';

const withToggle = ({
  modalComponent: ModalComponent,
  toggleButton: ToggleButton
}) => {
  return props => (
    <Toggle
      open={show => <ToggleButton click={show} />}
      content={hide => (
        <Modal close={hide}>
          <ModalComponent {...props} closeModal={hide} />
        </Modal>
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
