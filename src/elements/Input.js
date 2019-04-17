import styled from 'styled-components';
import { color } from 'utils';

export default styled.input`
  font-family: inherit;
  font-size: 1rem;
  color: ${color.textDark};
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
    color: ${color.textSecondary};
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-1.5rem);
  }
`;
