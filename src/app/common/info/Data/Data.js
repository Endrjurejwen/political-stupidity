import React from 'react';
import { shape } from 'prop-types';
import moment from 'moment';
import 'moment/locale/pl';

import * as S from './style';

moment.locale('pl');

const data = ({ dataNumber }) => (
  <S.Data data-testid="quotation-timestamp">
    {moment(dataNumber.toDate()).calendar()}
  </S.Data>
);

data.propTypes = {
  dataNumber: shape().isRequired
};

export default data;
