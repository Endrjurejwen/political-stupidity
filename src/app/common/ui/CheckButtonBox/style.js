import styled from 'styled-components';
import { spacing, color, hidden } from 'utils';

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

export { Input, RadioButton, InputBox };
