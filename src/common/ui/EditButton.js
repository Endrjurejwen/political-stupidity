import React from 'react';
import styled from 'styled-components';
import { func, bool } from 'prop-types';
import { Icon } from 'elements';
import { spacing, color, flexCenter, absolute } from 'utils';

const EditButton = ({ click, isDisplay }) => (
  <IconButton data-testid="button-edit" onClick={click} isDisplay={isDisplay}>
    <Icon name="edit" />
  </IconButton>
);

EditButton.propTypes = {
  click: func,
  isDisplay: bool
};

EditButton.defaultProps = {
  click: () => null,
  isDisplay: false
};

export default EditButton;

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
