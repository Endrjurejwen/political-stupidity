import React from 'react';
import QuotesApp from 'quotes/containers/QuotesApp';
import HeaderContainer from 'header/containers/HeaderContainer';

const homePage = () => (
  <>
    <HeaderContainer />
    <QuotesApp />
  </>
);

export default homePage;
