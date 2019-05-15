import React from 'react';
import { withToggle } from 'app/common';
import SortQuotes from 'app/quotes/containers/SortQuotes';
import FilterQuotes from 'app/quotes/containers/FilterQuotes';
import FilterButton from 'app/quotes/components/FilterButton';

import * as S from './style';

const FilterQuotesWithToggle = withToggle({
  modalComponent: FilterQuotes,
  toggleButton: FilterButton
});

const controls = () => (
  <S.FlexWrapper>
    <S.PanelContainer>
      <SortQuotes />
      <FilterQuotesWithToggle />
    </S.PanelContainer>
  </S.FlexWrapper>
);

export default controls;

// import React from 'react';
// import { Modal, Toggle, withDelayUnmounting } from 'app/common';
// import SortQuotes from 'app/quotes/containers/SortQuotes';
// import FilterQuotes from 'app/quotes/containers/FilterQuotes';

// import * as S from './style';

// const controls = () => {
//   const DelayedModal = withDelayUnmounting(Modal);
//   return (
//     <S.FlexWrapper>
//       <S.PanelContainer>
//         <SortQuotes />
//         <Toggle
//           open={show => (
//             <S.FilterButton onClick={show}>
//               <span>Filtry</span>
//               <S.FilterSymbol />
//             </S.FilterButton>
//           )}
//           content={({ hide, isShown }) => (
//             <DelayedModal
//               close={hide}
//               isMounted={isShown}
//               isShown={isShown}
//               delayTime={200}
//             >
//               <FilterQuotes closeModal={hide} />
//             </DelayedModal>
//           )}
//         />
//       </S.PanelContainer>
//     </S.FlexWrapper>
//   )
// };

// export default controls;
