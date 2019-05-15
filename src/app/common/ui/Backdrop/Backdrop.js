import React from 'react';
import { func } from 'prop-types';

import * as S from './style';

const backdrop = ({ close, isMounted }) => (
  <S.Backdrop isAnimated={isMounted} data-testid="backdrop" onClick={close} />
);

backdrop.propTypes = {
  close: func.isRequired
};

export default backdrop;
