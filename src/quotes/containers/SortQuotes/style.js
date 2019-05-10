import styled from 'styled-components';
import { flexCenter, spacing, media, color } from 'utils';

const SortButtonsList = styled.ul`
  list-style: none;
  ${flexCenter({ justifyContent: 'center', alignItems: 'start' })};
  flex-wrap: wrap;
  margin-bottom: ${spacing[2]};

  ${media.phone`
    margin-bottom: 0;
    /* border-right: 2px solid ${color.action}; */
  `}
`;

const SortButtonListItem = styled.li`
  display: block;

  ${media.phone`
    margin-right: ${spacing[1]};
  `}
`;

export { SortButtonsList, SortButtonListItem };
