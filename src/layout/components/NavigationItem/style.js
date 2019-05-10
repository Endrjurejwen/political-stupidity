import styled from 'styled-components';
import { Link } from 'elements';
import { media, flexCenter, spacing } from 'utils';

const NavigationItem = styled.li`
  ${flexCenter()};
  width: 70%;
  background-color: transparent;

  ${media.tablet`
    width: auto;
    padding: 0 ${spacing[2]};
    height: 100%;
  `}
`;

export { NavigationItem, Link };
