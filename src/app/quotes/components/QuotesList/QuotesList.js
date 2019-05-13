import React from 'react';
import { arrayOf } from 'prop-types';
import Quotation from 'app/quotes/components/Quotation';
import ToCommentsButton from 'app/quotes/components/ToCommentsButton';
import { quotationType } from 'app/quotes/propTypes';

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
