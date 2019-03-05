import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'elements';
import { spacing, color, flexCenter, absolute } from 'utils';

const CloseButton = ({ click, isDisplay }) => (
  <IconButton data-testid="button-close" onClick={click} isDisplay={isDisplay}>
    <Icon name="close" width="1rem" />
  </IconButton>
);

CloseButton.propTypes = {
  click: PropTypes.func,
  isDisplay: PropTypes.bool
};

CloseButton.defaultProps = {
  click: () => null,
  isDisplay: false
};

export default CloseButton;

const IconButton = styled.button`
  ${flexCenter};
  ${absolute({ side: 'right' })};
  color: ${color.action};
  ${flexCenter};
  font-size: 0.9rem;
  padding: ${spacing[1]} ${spacing[2]};

  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
`;
