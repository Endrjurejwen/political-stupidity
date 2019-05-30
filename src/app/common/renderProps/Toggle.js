/* eslint no-unused-vars: 0 */

import React, { useState } from 'react';
import { func } from 'prop-types';

const toggle = ({ open, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {open(show)}
      {content({ hide, isShown })}
    </>
  );
};

toggle.propTypes = {
  open: func,
  content: func
};

toggle.defaultProps = {
  open: () => null,
  content: () => null
};

export default toggle;
