import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

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
  change: func,
  id: string.isRequired,
  placeholder: string,
  type: string
};

inputBox.defaultProps = {
  change: () => null,
  placeholder: 'name',
  type: 'text'
};

export default inputBox;

const Wrapper = styled.div`
  margin-bottom: ${spacing[3]};
`;
