import React from 'react';
import { arrayOf } from 'prop-types';
import Quotation from 'quotes/components/Quotation';
import ToCommentsButton from 'quotes/components/ToCommentsButton';
import { quotationType } from 'quotes/propTypes';

const quotesList = ({ quotes }) => (
  <div data-testid="quotes-list">
    {quotes &&
      quotes.map(quotation => (
        <Quotation
          key={quotation.id}
          quotation={quotation}
          navigateButton={<ToCommentsButton quotation={quotation} />}
        />
      ))}
  </div>
);

quotesList.propTypes = {
  quotes: arrayOf(quotationType)
};

quotesList.defaultProps = {
  quotes: null
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
