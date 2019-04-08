// import React from 'react';
// import { CloseButton, EditButton, Toggle, Modal } from 'common';

// const toolbox = ({ editInfo, deleteInfo }) => (
//   <>
//     <Toggle
//       open={show => <EditButton click={show} />}
//       content={hide => (
//         <Modal close={hide}>
//           {React.cloneElement(editInfo, { onCloseClick: hide })}
//         </Modal>
//       )}
//     />
//     <Toggle
//       open={show => <CloseButton click={show} />}
//       content={hide => (
//         <Modal close={hide}>{(deleteInfo, { closeModal: hide })}</Modal>
//       )}
//     />
//   </>
// );

// export default toolbox;

// import React from 'react';
// import { CloseButton, EditButton, Toggle, Modal } from 'common';

// const toolbox = ({ editInfo, deleteInfo }) => (
//   <>
//     <Toggle
//       open={show => <EditButton click={show} />}
//       content={hide => (
//         <Modal close={hide}>
//           {editInfo}
//         </Modal>
//       )}
//     />
//     <Toggle
//       open={show => <CloseButton click={show} />}
//       content={hide => (
//         <Modal close={hide}>
//           {deleteInfo}
//         </Modal>
//       )}
//     />
//   </>
// );

// export default toolbox;
