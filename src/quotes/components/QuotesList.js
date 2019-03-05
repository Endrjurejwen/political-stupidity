import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Quotation from 'quotes/components/Quotation';

// pokazuj coś innego jak nie ma w ogóle cytatów
const quotesList = ({
  quotes,
  navigationClick,
  likeClick,
  deleteClick,
  full,
  userId
}) => (
  <div data-testid="quotes-list">
    {quotes &&
      quotes.map(quotation => (
        <Quotation
          navigationClick={() => navigationClick(quotation.id)}
          quotation={quotation}
          key={quotation.id}
          likeClick={() => likeClick(quotation.id)}
          deleteClick={() => deleteClick(quotation.id)}
          full={quotation.isFavorite}
          userId={userId}
        />
      ))}
  </div>
);

quotesList.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object).isRequired
};

// quotation.defaultProps = {

// };

export default quotesList;
