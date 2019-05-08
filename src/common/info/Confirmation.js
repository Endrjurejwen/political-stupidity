import React, { useRef } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { InlineButton, H5 } from 'elements';
import { flexCenter, spacing } from 'utils';
import { useAutoFocus } from 'common';

const confirmation = ({ title, text, onConfirmClick, onCloseClick }) => {
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  return (
    <>
      <H5>{title}</H5>
      <p>{text}</p>
      <Container>
        <InlineButton
          ref={autoFocusRef}
          marginLeft="auto"
          onClick={onCloseClick}
        >
          Anuluję
        </InlineButton>
        <InlineButton
          marginLeft={spacing[6]}
          onClick={() => {
            onConfirmClick();
            onCloseClick();
          }}
        >
          Potwierdzam
        </InlineButton>
      </Container>
    </>
  );
};

confirmation.propTypes = {
  onConfirmClick: func,
  onCloseClick: func,
  text: string,
  title: string
};

confirmation.defaultProps = {
  onConfirmClick: () => null,
  onCloseClick: () => null,
  text:
    'Czy potwierdzasz usunięcie cytatu? Będzie się to wiązać z usunięciem również wszystkich komentarzy, kóre pojawiły się pod tym cytatem! ',
  title: 'Usunięcie cytatu'
};

export default confirmation;

const Container = styled.div`
  ${flexCenter({ justifyContent: 'space-between' })};
  margin-top: ${spacing[3]};
`;
