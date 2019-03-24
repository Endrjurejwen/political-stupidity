import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Input, Label } from 'elements';
import { spacing } from 'utils';

const inputBox = ({ type, placeholder, id, change, ...rest }) => (
  <Wrapper>
    <Input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={change}
      {...rest}
    />
    <Label htmlFor={id}>{placeholder}</Label>
  </Wrapper>
);

inputBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  change: PropTypes.func
};

inputBox.defaultProps = {
  type: 'text',
  placeholder: 'name',
  change: () => null
};

export default inputBox;

const Wrapper = styled.div`
  margin-bottom: ${spacing[3]};
`;
