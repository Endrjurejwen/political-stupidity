import React from 'react';
import PropTypes from 'prop-types';
import Quotation from 'quotes/components/Quotation';
import { quotationType } from 'types';
import { LikeButton, CloseButton } from 'common';
import { Button } from 'elements';

const quotesList = ({
  quotes,
  user,
  navigationClick,
  likeClick,
  deleteClick
}) => (
  <div data-testid="quotes-list">
    {quotes &&
      quotes.map(quotation => (
        <Quotation
          quotation={quotation}
          key={quotation.id}
          deleteClick={() => deleteClick(quotation.id)}
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
            click={() => likeClick(quotation.id)}
            full={user.id in quotation.likes}
          />
        </Quotation>
      ))}
  </div>
);

quotesList.propTypes = {
  quotes: PropTypes.arrayOf(quotationType),
  userId: PropTypes.string,
  navigationClick: PropTypes.func,
  likeClick: PropTypes.func,
  deleteClick: PropTypes.func
};

quotesList.defaultProps = {
  quotes: null,
  userId: null,
  navigationClick: () => null,
  likeClick: () => null,
  deleteClick: () => null
};

export default quotesList;
