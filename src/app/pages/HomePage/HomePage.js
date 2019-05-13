import React from 'react';
import QuotesApp from 'app/quotes/containers/QuotesApp';
import StatsContainer from 'app/stats/containers/StatsContainer';
import Header from 'app/header/components/Header';

const homePage = () => (
  <>
    <Header />
    <StatsContainer />
    <QuotesApp />
  </>
);

export default homePage;
