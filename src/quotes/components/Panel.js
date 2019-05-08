import React from 'react';
import styled from 'styled-components';
import { Modal, Toggle } from 'common';
import { Button } from 'elements';
import { spacing } from 'utils';
import SortQuotes from 'quotes/containers/SortQuotes';
import FilterQuotes from 'quotes/containers/FilterQuotes';

const panel = () => (
  <Wrapper>
    <SortQuotes />
    <Toggle
      open={show => (
        <Button secondary onClick={show}>
          Filtry
        </Button>
      )}
      content={hide => (
        <Modal close={hide}>
          <FilterQuotes closeModal={hide} />
        </Modal>
      )}
    />
  </Wrapper>
);

export default panel;

const Wrapper = styled.aside`
  margin: ${spacing[4]} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
