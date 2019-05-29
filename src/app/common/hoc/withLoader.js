import React from 'react';
import { Spinner } from 'app/common';

const withLoader = ({ isLoading, bgColor, children }) => {
  if (isLoading) return <Spinner bgColor={bgColor} />;
  return children;
};

export default withLoader;
