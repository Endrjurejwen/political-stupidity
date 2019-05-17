import React from 'react';
import { history, location } from 'react-router-prop-types';
import QuotationDetails from 'app/quotes/containers/QuotationDetails';
import CommentsApp from 'app/comments/containers/CommentsApp';
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

quotationDetailsPage.propTypes = {
  history: history.isRequired,
  location: location.isRequired
};

export default quotationDetailsPage;

const ReturnButton = styled(Button)`
  ${elevation[4]};
  position: fixed;
  bottom: 5%;
  background-color: ${color.textDark};
  border-color: ${color.textDark};
`;
