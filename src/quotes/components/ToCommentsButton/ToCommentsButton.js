import React from 'react';
import { withRouter } from 'react-router-dom';
import { withPrivacyGuard } from 'common';
import { quotationType } from 'quotes/propTypes';
import { history } from 'react-router-prop-types';

import * as S from 'elements';

const ButtonWithPrivacyGuard = withPrivacyGuard(S.Button);

const toCommentsButton = ({ quotation, history }) => {
  const handleNavigateClick = () => {
    history.push({
      pathname: `/quotes/${quotation.id}`,
      state: { id: window.scrollY }
    });
  };

  return (
    <ButtonWithPrivacyGuard
      secondary
      data-testid="quotation-comments-button"
      onClick={handleNavigateClick}
    >
      Komentarze ({quotation.commentsCount})
    </ButtonWithPrivacyGuard>
  );
};

toCommentsButton.propTypes = {
  history: history.isRequired,
  quotation: quotationType
};

toCommentsButton.defaultProps = {
  quotation: null
};

export default withRouter(toCommentsButton);
