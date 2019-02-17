import styled from 'styled-components';
import { color } from 'utils';

export default styled.textarea`
  font-family: inherit;
  font-size: 1rem;
  color: ${color.primary};
  padding: 0.4rem 0.5rem;
  border: 2px solid grey;
  background-color: transparent;
  display: block;
  width: 100%;
  resize: none;

  &:focus {
    outline: none;
    border: 2px solid ${color.valid};
  }

  &:focus:invalid {
    border: 2px solid ${color.invalid};
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
