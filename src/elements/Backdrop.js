import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fixed } from 'utils';

const backdrop = ({ close }) => (
  <Background data-testid="backdrop" onClick={close} />
);

backdrop.propTypes = {
  close: PropTypes.func.isRequired
};

const Background = styled.div`
  ${fixed()};

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
`;

export default backdrop;