import React from 'react';
import styled from 'styled-components';
import { spacing } from 'utils';
import SortQuotes from 'quotes/containers/SortQuotes';

const panel = () => (
  <Wrapper>
    <SortQuotes />
  </Wrapper>
);

export default panel;

const Wrapper = styled.aside`
  margin: ${spacing[4]} 0;
`;
