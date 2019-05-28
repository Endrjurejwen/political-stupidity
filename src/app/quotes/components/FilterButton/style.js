import styled from 'styled-components';
import { spacing, color } from 'utils';

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

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.5px;
    left: 0;
    height: 2px;
    width: 0;
    background-color: ${color.action};
    transition: width 0.15s ease-in-out, background-color 0.15s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover div {
    background-color: ${color.action};
  }

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
    background-color: inherit;
    position: absolute;
    top: -4px;
    left: 0;
    width: 17px;
    height: 2px;
  }

  &:before {
    content: '';
    background-color: inherit;
    position: absolute;
    top: 4px;
    left: 0;
    width: 8px;
    height: 2px;
  }
`;

export { FilterButton, FilterSymbol };
