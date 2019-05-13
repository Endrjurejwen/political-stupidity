import styled from 'styled-components';
import { InlineButton, H5 } from 'elements';
import { flexCenter, spacing } from 'utils';

const ButtonsContainer = styled.div`
  ${flexCenter({ justifyContent: 'space-between' })};
  margin-top: ${spacing[3]};
`;

export { ButtonsContainer, InlineButton, H5 };
