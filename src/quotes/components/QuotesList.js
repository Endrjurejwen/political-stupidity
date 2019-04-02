import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import Quotation from 'quotes/components/Quotation';
import { quotationType } from 'quotes/propTypes';
import { LikeButton, CloseButton } from 'common';
import { Button } from 'elements';

const quotesList = ({
  quotes,
  user,
  navigationClick,
  onLikeClick,
  onDislikeClick,
  deleteClick
}) => (
  <div id="feed" data-testid="quotes-list">
    {quotes &&
      quotes.map(quotation => (
        <Quotation
          id={quotation.id}
          key={quotation.id}
          quotation={quotation}
          closeButton={
            <CloseButton
              click={() => deleteClick(quotation.id)}
              isDisplay={quotation.author.id === user.id}
            />
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
