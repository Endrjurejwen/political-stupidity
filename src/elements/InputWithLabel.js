import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color, spacing } from 'utils';

const inputWithLabel = ({ type, placeholder, id, ...rest }) => (
  <Wrapper>
    <Input type={type} placeholder={placeholder} id={id} {...rest} />
    <Label htmlFor={id}>{placeholder}</Label>
  </Wrapper>
);

inputWithLabel.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired
};

inputWithLabel.defaultProps = {
  type: 'text',
  placeholder: 'name'
};

export default inputWithLabel;

const Wrapper = styled.div`
  margin-bottom: ${spacing[1]};
`;

const Input = styled.input`
  font-family: inherit;
  font-size: 1rem;
  color: ${color.primary};
  padding: 0.2rem 0.3rem;
  border: none;
  border-bottom: 2px solid grey;
  background-color: transparent;
  display: block;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${color.valid};
  }

  &:focus:invalid {
    border-bottom: 2px solid ${color.invalid};
  }

  &::placeholder {
    color: grey;
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-1.5rem);
  }
`;

const Label = styled.label`
  color: grey;
  font-size: 0.8rem;
  margin-left: 0.3rem;
  display: block;
  transition: opacity 0.2s ease;
  transition: transform 0.2s ease;
`;
