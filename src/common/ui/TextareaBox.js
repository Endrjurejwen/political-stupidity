import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Textarea, Label } from 'elements';
import { spacing } from 'utils';

const textareaBox = ({ type, placeholder, id, ...rest }) => (
  <Wrapper>
    <Textarea type={type} placeholder={placeholder} id={id} {...rest} />
    <Label htmlFor={id}>{placeholder}</Label>
  </Wrapper>
);

textareaBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired
};

textareaBox.defaultProps = {
  type: 'text',
  placeholder: 'Tutaj wpisz swój komentarz'
};

export default textareaBox;

const Wrapper = styled.div`
  margin-bottom: ${spacing[3]};
`;
