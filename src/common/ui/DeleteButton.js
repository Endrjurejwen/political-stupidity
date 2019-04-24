import React from 'react';
import styled from 'styled-components';
import { func, bool } from 'prop-types';
import { Icon } from 'elements';
import { spacing, color, flexCenter, absolute } from 'utils';

const DeleteButton = ({ click, isDisplay }) => (
  <IconButton data-testid="button-close" onClick={click} isDisplay={isDisplay}>
    <Icon name="delete" />
  </IconButton>
);

DeleteButton.propTypes = {
  click: func,
  isDisplay: bool
};

DeleteButton.defaultProps = {
  click: () => null,
  isDisplay: false
};

export default DeleteButton;

const IconButton = styled.button`
  ${flexCenter};
  /* ${absolute({ side: 'right' })}; */
  color: ${color.action};
  font-size: 0.9rem;
  padding: ${spacing[1]} ${spacing[2]};

  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
  /* display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')}; */
`;
