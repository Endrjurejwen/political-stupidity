import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Textarea, Label } from 'elements';
import { color, spacing } from 'utils';

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
  margin-bottom: ${spacing[1]};
`;

// const Input = styled.textarea`
//   font-family: inherit;
//   font-size: 1rem;
//   color: ${color.primary};
//   padding: 0.4rem 0.5rem;
//   border: 2px solid grey;
//   background-color: transparent;
//   display: block;
//   width: 100%;
//   resize: none;

//   &:focus {
//     outline: none;
//     border: 2px solid ${color.valid};
//   }

//   &:focus:invalid {
//     border: 2px solid ${color.invalid};
//   }

//   &::placeholder {
//     color: grey;
//   }

//   &:placeholder-shown + label {
//     opacity: 0;
//     visibility: hidden;
//     transform: translateY(-1.5rem);
//   }
// `;

// const Label = styled.label`
//   color: grey;
//   font-size: 0.8rem;
//   margin-left: 0.3rem;
//   display: block;
//   transition: opacity 0.2s ease;
//   transition: transform 0.2s ease;
// `;
