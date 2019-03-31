import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import { Textarea, Label } from 'elements';
import { spacing } from 'utils';

const textareaBox = ({ type, placeholder, id, ...rest }) => (
  <Wrapper>
    <Textarea type={type} placeholder={placeholder} id={id} {...rest} />
    <Label htmlFor={id}>{placeholder}</Label>
  </Wrapper>
);

textareaBox.propTypes = {
  id: string.isRequired,
  placeholder: string,
  type: string
};

textareaBox.defaultProps = {
  placeholder: 'Tutaj wpisz swój komentarz',
  type: 'text'
};

export default textareaBox;

const Wrapper = styled.div`
  margin-bottom: ${spacing[3]};
`;
