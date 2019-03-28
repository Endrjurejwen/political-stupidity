import React from 'react';
import PropTypes from 'prop-types';
import Quotation from 'quotes/components/Quotation';
import { quotationType } from 'quotes/types';
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
  <div data-testid="quotes-list">
    {quotes &&
      quotes.map(quotation => (
        <Quotation
          quotation={quotation}
          key={quotation.id}
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
  quotes: PropTypes.arrayOf(quotationType),
  user: PropTypes.shape({
    id: PropTypes.string
  }),
  navigationClick: PropTypes.func.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  onDislikeClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
};

quotesList.defaultProps = {
  user: null,
  quotes: null
};

export default quotesList;
