import React from 'react';
import QuotationDetails from 'quotes/containers/QuotationDetails';
import CommentsApp from 'comments/containers/CommentsApp';
import styled from 'styled-components';
import { Button } from 'elements';
import { color, elevation } from 'utils';

const quotationDetailsPage = ({ history, location }) => {
  const handleNavigateReturn = () => {
    history.push({
      pathname: '/quotes',
      state: { id: location.state.id }
    });
  };
  return (
    <>
      <QuotationDetails>
        <CommentsApp />
      </QuotationDetails>
      <ReturnButton onClick={handleNavigateReturn}>Powrót</ReturnButton>
    </>
  );
};

export default quotationDetailsPage;

const ReturnButton = styled(Button)`
  ${elevation[4]};
  position: fixed;
  bottom: 5%;
  background-color: ${color.textDark};
  border-color: ${color.textDark};
`;
