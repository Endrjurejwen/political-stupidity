import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import Quotation from 'quotes/components/Quotation';
import { quotationType } from 'quotes/propTypes';
import {
  LikeButton,
  CloseButton,
  EditButton,
  Toggle,
  Modal,
  Toolbox
} from 'common';
import { Button } from 'elements';
import Confirmation from 'quotes/components/Confirmation';
import CreateQuotation from 'quotes/containers/CreateQuotation';

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
          id={quotation.id}
          key={quotation.id}
          quotation={quotation}
          isToolboxDisplay={quotation.author.id === user.id}
          toolbox={
            <>
              <Toggle
                open={show => <CloseButton click={show} />}
                content={hide => (
                  <Modal close={hide}>
                    <Confirmation
                      onCloseClick={hide}
                      onConfirmClick={() => deleteClick(quotation.id)}
                    />
                  </Modal>
                )}
              />
              <Toggle
                open={show => <EditButton click={show} />}
                content={hide => (
                  <Modal close={hide}>
                    <CreateQuotation quotation={quotation} />
                  </Modal>
                )}
              />
            </>
          }
        >
          <Button
            secondary
            data-testid="quotation-comments-button"
            onClick={() => navigationClick(quotation.id)}
          >
            Komentarze ({quotation.commentsCount})
          </Button>
          <LikeButton
            likes={quotation.likesCount}
            full={user.id in quotation.likes}
            click={
              user.id in quotation.likes
                ? () => onDislikeClick(quotation.id)
                : () => onLikeClick(quotation.id)
            }
          />
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

// closeButton={
//   <CloseButton
//     click={() => deleteClick(quotation.id)}
//     isDisplay={quotation.author.id === user.id}
//   />
// }
