import React from 'react';
import QuotationDetails from 'app/quotes/containers/QuotationDetails';
import CommentsApp from 'app/comments/containers/CommentsApp';

const quotationDetailsPage = () => (
  <>
    <QuotationDetails>
      <CommentsApp />
    </QuotationDetails>
  </>
);

export default quotationDetailsPage;
