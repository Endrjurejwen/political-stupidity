import React from 'react';
import QuotationDetails from 'quotes/containers/QuotationDetails';
import CommentsApp from 'comments/containers/CommentsApp';

const quotationDetailsPage = () => (
  <QuotationDetails>
    <CommentsApp />
  </QuotationDetails>
);

export default quotationDetailsPage;
