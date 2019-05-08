import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { spacing, color, hidden } from 'utils';

const checkButtonBox = ({ id, label, ...props }) => (
  <InputBox>
    <Input id={id} {...props} />
    <label htmlFor={id}>
      <RadioButton>{label}</RadioButton>
    </label>
  </InputBox>
);

checkButtonBox.propTypes = {
  id: string.isRequired,
  label: string
};

checkButtonBox.defaultProps = {
  label: ''
};

export default checkButtonBox;

const Input = styled.input`
  ${hidden()};
`;

const RadioButton = styled.span`
  color: ${color.action};
  border: 2px solid ${color.action};
  border-radius: 100px;
  padding: ${spacing[0]} ${spacing[2]};
`;

const InputBox = styled.li`
  list-style: none;
  margin-right: ${spacing[2]};
  margin-bottom: ${spacing[4]};

  input:checked + label span {
    background-color: ${color.action};
    color: ${color.textLight};
  }
`;
