import React from 'react';
import { func } from 'prop-types';
import { sortPropTypes } from 'quotes/propTypes';
import styled from 'styled-components';
import { spacing, color } from 'utils';

const sortButton = ({
  sortType: { active, order, name, label },
  onSortClick
}) => (
  <SortButton
    isActive={active}
    asc={active && order === 'asc'}
    data-sortby={name}
    onClick={onSortClick}
  >
    {label}
  </SortButton>
);

sortButton.propTypes = {
  onSortClick: func,
  sortType: sortPropTypes
};

sortButton.defaultProps = {
  onSortClick: () => null,
  sortType: null
};

export default sortButton;

const SortButton = styled.button`
  font-family: inherit;
  font-weight: bold;
  font-size: 0.6rem;
  position: relative;
  padding: ${spacing[1]} ${spacing[5]} ${spacing[1]} ${spacing[1]};
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.isActive ? color.action : 'transparent'};
  background-color: transparent;
  color: ${color.textDark};
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.1s background-color ease-in;
  transition: 0.1s color ease-in;

  &::after {
    content: '';
    position: absolute;
    /* bottom: ${props => (props.asc ? '-0.35rem' : '0.20rem')}; */
    bottom: 0.20rem;
    right: 0.6rem;
    width: 0px;
    height: 0px;
    border: 0.5rem solid;
    border-color: ${props =>
      props.isActive
        ? `${color.textDark} transparent transparent`
        : `${color.textDark} transparent transparent`};
    transform: ${props => (props.asc ? 'rotate(180deg)' : 'rotate(0deg)')};
    transform-origin: center 25%;
    transition: 0.1s transform ease-in;
  }
`;
