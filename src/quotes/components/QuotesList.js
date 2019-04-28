import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import Quotation from 'quotes/components/Quotation';
import { quotationType } from 'quotes/propTypes';
import {
  LikeButton,
  DeleteButton,
  EditButton,
  Toggle,
  Modal,
  withToggle
} from 'common';
import { Button } from 'elements';
import Confirmation from 'quotes/components/Confirmation';
import EditQuotationToggle from 'quotes/components/EditQuotationToggle';
import DeleteQuotationToggle from 'quotes/components/DeleteQuotationToggle';
import CreateQuotation from 'quotes/containers/CreateQuotation';
import EditQuotation from 'quotes/containers/EditQuotation';
import DeleteQuotation from 'quotes/containers/DeleteQuotation';
import LikeQuotation from 'quotes/containers/LikeQuotation';
import ToCommentsButton from 'quotes/components/ToCommentsButton';

const DeleteQuotationWithToggle = withToggle({
  modalComponent: DeleteQuotation,
  toggleButton: DeleteButton
});

const EditQuotationWithToggle = withToggle({
  modalComponent: EditQuotation,
  toggleButton: EditButton
});

const quotesList = ({
  quotes,
  user,
  navigationClick,
  onLikeClick,
  onDislikeClick,
  deleteClick
}) => (
  <div data-testid="quotes-list">
    {quotes &&
      quotes.map(quotation => (
        <Quotation
          key={quotation.id}
          quotation={quotation}
          // toolbox={
          //   <>
          //     {/* <DeleteQuotationToggle quotation={quotation} />
          //     <EditQuotationToggle quotation={quotation} /> */}
          //     {/* <DeleteQuotationWithToggle quotation={quotation} />
          //     <EditQuotationWithToggle quotation={quotation} /> */}
          //   </>
          // }
        >
          {/* <Button
            secondary
            data-testid="quotation-comments-button"
            onClick={() => navigationClick(quotation.id)}
          >
            Komentarze ({quotation.commentsCount})
          </Button> */}
          {/* <LikeButton
            likes={quotation.likesCount}
            full={user.id in quotation.likes}
            click={
              user.id in quotation.likes
                ? () => onDislikeClick(quotation.id)
                : () => onLikeClick(quotation.id)
            }
          /> */}
          {/* <ToCommentsButton quotation={quotation} />
          <LikeQuotation quotation={quotation} /> */}
        </Quotation>
      ))}
  </div>
);

quotesList.propTypes = {
  deleteClick: func.isRequired,
  navigationClick: func.isRequired,
  onLikeClick: func.isRequired,
  onDislikeClick: func.isRequired,
  quotes: arrayOf(quotationType),
  user: shape({
    id: string
  })
};

quotesList.defaultProps = {
  quotes: null,
  user: null
};

export default quotesList;

// const quotesList = ({
//   quotes,
//   user,
//   navigationClick,
//   onLikeClick,
//   onDislikeClick,
//   deleteClick
// }) => (
//   <div data-testid="quotes-list">
//     {quotes &&
//       quotes.map(quotation => (
//         <Quotation
//           key={quotation.id}
//           quotation={quotation}
//           isToolboxDisplay={quotation.author.id === user.id}
//           toolbox={
//             <>
//               <Toggle
//                 open={show => <DeleteButton click={show} />}
//                 content={hide => (
//                   <Modal close={hide}>
//                     <Confirmation
//                       onCloseClick={hide}
//                       onConfirmClick={() => deleteClick(quotation.id)}
//                     />
//                   </Modal>
//                 )}
//               />
//               <Toggle
//                 open={show => <EditButton click={show} />}
//                 content={hide => (
//                   <Modal close={hide}>
//                     <CreateQuotation quotation={quotation} />
//                   </Modal>
//                 )}
//               />
//             </>
//           }
//         >
//           <Button
//             secondary
//             data-testid="quotation-comments-button"
//             onClick={() => navigationClick(quotation.id)}
//           >
//             Komentarze ({quotation.commentsCount})
//           </Button>
//           <LikeButton
//             likes={quotation.likesCount}
//             full={user.id in quotation.likes}
//             click={
//               user.id in quotation.likes
//                 ? () => onDislikeClick(quotation.id)
//                 : () => onLikeClick(quotation.id)
//             }
//           />
//         </Quotation>
//       ))}
//   </div>
// );

// quotesList.propTypes = {
//   deleteClick: func.isRequired,
//   navigationClick: func.isRequired,
//   onLikeClick: func.isRequired,
//   onDislikeClick: func.isRequired,
//   quotes: arrayOf(quotationType),
//   user: shape({
//     id: string
//   })
// };

// quotesList.defaultProps = {
//   quotes: null,
//   user: null
// };

// export default quotesList;
