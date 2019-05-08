import React from 'react';
import styled from 'styled-components';
import { ConfirmationError } from 'common';
import { spacing, elevation, color } from 'utils';

const authErrorHandler = ({ error, resetError }) => {
  const handleClick = () => {
    resetError();
  };
  let errorMessage = null;
  if (error) {
    errorMessage = (
      <Wrappper>
        <ConfirmationError onConfirmClick={handleClick} text={error} />
      </Wrappper>
    );
  }
  return errorMessage;
};

export default authErrorHandler;

const Wrappper = styled.article`
  background-color: inherit;
  padding: ${spacing[3]} ${spacing[2]};
  margin-top: ${spacing[4]};
  border-top: 2px solid ${color.invalid};
  border-bottom: 2px solid ${color.invalid};
  /* ${elevation[5]}; */
  max-width: 30rem;
  /* border-radius: 8px; */
`;
