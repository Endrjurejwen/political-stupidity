import React from 'react';
// import styled from 'styled-components';
import QuotesApp from 'quotes/containers/QuotesApp';
import StatsContainer from 'stats/containers/StatsContainer';
import Header from 'header/components/Header';
// import { Button } from 'elements';
// import { Modal, Toggle } from 'common';
// import { color, elevation, media } from 'utils';

const homePage = () => (
  <>
    <Header />
    <StatsContainer />
    <QuotesApp />
  </>
);

export default homePage;
