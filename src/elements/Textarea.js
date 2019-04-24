import styled from 'styled-components';
import { color, spacing } from 'utils';

export default styled.textarea`
  overflow: hidden;
  font-family: inherit;
  font-size: 1rem;
  color: ${color.textDark};
  padding: ${spacing[1]} ${spacing[1]} ${spacing[2]};
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
    color: ${color.textSecondary};
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-1.5rem);
  }
`;
