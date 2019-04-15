import React from 'react';
import styled from 'styled-components';
import QuotesApp from 'quotes/containers/QuotesApp';
import StatsContainer from 'stats/containers/StatsContainer';
import CreateQuotation from 'quotes/containers/CreateQuotation';
import { Button } from 'elements';
import { Modal, Toggle } from 'common';
import { color, elevation, media } from 'utils';

const homePage = () => (
  <>
    <StatsContainer />
    <MainWrapper>
      <QuotesApp />
      {/* <Toggle
        open={show => <ActionButton onClick={show}>Dodaj Cytat</ActionButton>}
        content={hide => (
          <Modal close={hide}>
            <CreateQuotation closeModal={hide} />
          </Modal>
        )}
      /> */}
    </MainWrapper>
    {/* <Toggle
        open={show => <ActionButton onClick={show}>Dodaj Cytat</ActionButton>}
        content={hide => (
          <Modal close={hide}>
            <CreateQuotation closeModal={hide} />
          </Modal>
        )}
      /> */}
  </>
);

export default homePage;

const MainWrapper = styled.main`
  position: relative;
`;

const ActionButton = styled(Button)`
  ${elevation[4]};
  position: fixed;
  /* left: 0; */
  right: 0.5rem;
  bottom: 1rem;
  /* background-color: ${color.primary};
  border-color: ${color.primary}; */

  ${media.tablet`
    display: none;
  `}
`;
