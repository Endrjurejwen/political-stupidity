import React from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { color } from 'utils';

const data = ({ dataNumber }) => (
  <DataContainer data-testid="quotation-timestamp">
    {moment(dataNumber.toDate()).calendar()}
  </DataContainer>
);

data.propTypes = {
  dataNumber: shape().isRequired
};

export default data;

const DataContainer = styled.time`
  font-size: 0.85rem;
  color: ${color.textSecondary};
`;
