import React from 'react';
import { history, location } from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

import * as S from './style';

const returnButton = ({ history, location }) => {
  const handleNavigateReturn = () => {
    history.push({
      pathname: '/quotes',
      state: { id: location.state.id }
    });
  };

  return (
    <S.ReturnButton onClick={handleNavigateReturn}>
      <span />
      Powrót do cytatów
    </S.ReturnButton>
  );
};

returnButton.propTypes = {
  history: history.isRequired,
  location: location.isRequired
};

export default withRouter(returnButton);
