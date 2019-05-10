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
