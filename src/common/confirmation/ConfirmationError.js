import React, { useRef } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { InlineButton, H5 } from 'elements';
import { flexCenter, spacing } from 'utils';
import { useAutoFocus } from 'common';

const confirmation = ({ title, text, onConfirmClick }) => {
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  return (
    <>
      <H5>{title}</H5>
      <p>{text}</p>
      <Container>
        <InlineButton marginLeft="auto" onClick={onConfirmClick}>
          Rozumiem
        </InlineButton>
      </Container>
    </>
  );
};

confirmation.propTypes = {
  onConfirmClick: func,
  text: string,
  title: string
};

confirmation.defaultProps = {
  onConfirmClick: () => null,
  text: '',
  title: 'Ups! Mamy problem'
};

export default confirmation;

const Container = styled.div`
  width: 90%;
  ${flexCenter({ justifyContent: 'space-between' })};
  margin-top: ${spacing[3]};
`;
