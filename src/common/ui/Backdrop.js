import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { fixed, color } from 'utils';

const backdrop = ({ close }) => (
  <Background data-testid="backdrop" onClick={close} />
);

backdrop.propTypes = {
  close: func.isRequired
};

const Background = styled.div`
  ${fixed()};

  width: 100vw;
  height: 100vh;
  background-color: ${color.backdrop};
  z-index: 20;
`;

export default backdrop;
