import React from 'react';
import { shape } from 'prop-types';
import moment from 'moment';

import * as S from './style';

const data = ({ dataNumber }) => (
  <S.Data data-testid="quotation-timestamp">
    {moment(dataNumber.toDate()).calendar()}
  </S.Data>
);

data.propTypes = {
  dataNumber: shape().isRequired
};

export default data;
