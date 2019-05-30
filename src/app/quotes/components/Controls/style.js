import styled from 'styled-components';
import { spacing, media, flexCenter, color, elevation } from 'utils';

const PanelContainer = styled.aside`
  ${flexCenter({ justifyContent: 'center', alignItems: 'center' })};
  flex-flow: column wrap;

  ${media.phone`
    flex-flow: row wrap;
    background-color: ${color.backgroundLight};
    ${elevation[1]};
    border: 2px solid ${color.navigation};
    border-radius: 100px;
    padding: ${spacing[1]} ${spacing[4]};
  `}
`;

const FlexWrapper = styled.div`
  ${flexCenter()};
  margin: ${spacing[4]} 0 ${spacing[5]};
`;

const FilterButton = styled.button`
  font-family: inherit;
  font-weight: bold;
  font-size: 0.6rem;
  padding: ${spacing[1]} ${spacing[2]};
  border: none;
  background-color: transparent;
  color: ${color.textDark};
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  span {
    margin-right: ${spacing[1]};
  }
`;

const FilterSymbol = styled.div`
  background-color: ${color.textDark};
  position: relative;
  width: 12px;
  height: 2px;
  transform: translateY(-1px);

  &:after {
    content: '';
    background-color: ${color.textDark};
    position: absolute;
    top: -4px;
    left: 0;
    width: 17px;
    height: 2px;
  }

  &:before {
    content: '';
    background-color: ${color.textDark};
    position: absolute;
    top: 4px;
    left: 0;
    width: 8px;
    height: 2px;
  }
`;

export { PanelContainer, FlexWrapper, FilterButton, FilterSymbol };
