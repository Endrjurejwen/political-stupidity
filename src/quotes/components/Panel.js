import React from 'react';
import styled from 'styled-components';
import { Modal, Toggle } from 'common';
import { spacing, media, flexCenter, color, elevation } from 'utils';
import SortQuotes from 'quotes/containers/SortQuotes';
import FilterQuotes from 'quotes/containers/FilterQuotes';

const panel = () => (
  <FlexWrapper>
    <PanelContainer>
      <SortQuotes />
      <Toggle
        open={show => (
          <FilterButton onClick={show}>
            <span>Filtry</span>
            <FilterSymbol />
          </FilterButton>
        )}
        content={hide => (
          <Modal close={hide}>
            <FilterQuotes closeModal={hide} />
          </Modal>
        )}
      />
    </PanelContainer>
  </FlexWrapper>
);

export default panel;

const PanelContainer = styled.aside`
  ${flexCenter({ justifyContent: 'center', alignItems: 'center' })};
  /* flex-wrap: wrap; */
  flex-flow: column wrap;

  ${media.phone`
    flex-flow: row wrap;
    background-color: ${color.backgroundLight};
    ${elevation[1]};
    border: 2px solid ${color.action};
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
  /* position: relative; */
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

// import React from 'react';
// import styled from 'styled-components';
// import { Modal, Toggle } from 'common';
// import { Button } from 'elements';
// import { spacing } from 'utils';
// import SortQuotes from 'quotes/containers/SortQuotes';
// import FilterQuotes from 'quotes/containers/FilterQuotes';

// const panel = () => (
//   <Wrapper>
//     <SortQuotes />
//     <Toggle
//       open={show => (
//         <Button secondary onClick={show}>
//           Filtry
//         </Button>
//       )}
//       content={hide => (
//         <Modal close={hide}>
//           <FilterQuotes closeModal={hide} />
//         </Modal>
//       )}
//     />
//   </Wrapper>
// );

// export default panel;

// const Wrapper = styled.aside`
//   margin: ${spacing[4]} 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
