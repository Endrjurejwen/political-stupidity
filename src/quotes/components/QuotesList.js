import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Quotation from 'quotes/components/Quotation';

const quotesList = ({ quotes }) => (
  <div>
    {quotes.map(quotation => (
      <Quotation quotation={quotation} key={quotation.id} />
    ))}
  </div>
);

quotesList.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object).isRequired
};

// quotation.defaultProps = {

// };

export default quotesList;
