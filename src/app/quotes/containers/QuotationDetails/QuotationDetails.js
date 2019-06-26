import React from 'react';
import { element } from 'prop-types';
import { history, location } from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Quotation from 'app/quotes/components/Quotation';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  firestoreConnect,
  withFirebase,
  withFirestore
} from 'react-redux-firebase';
import { getQuotationState, getErrorState } from 'app/quotes/selectors';
import { quotationType } from 'app/quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader, withErrorHandler } from 'app/common';
import { resetQuotesError } from 'app/quotes/actions';

import ROUTES_NAMES from 'app/pages/Routes/routesNames';
import * as S from 'elements';

export const quotationDetails = ({
  quotation,
  children,
  history,
  location
}) => {
  const handleNavigateReturn = () => {
    history.push({
      pathname: ROUTES_NAMES.quotes,
      state: { id: location.state.id }
    });
  };
  return (
    <WithLoader isLoading={!quotation} bgColor="#F4F4F4">
      <Quotation
        quotation={quotation}
        navigateButton={
          <S.Button onClick={handleNavigateReturn} secondary>
            Powrót
          </S.Button>
        }
      />
      <section>
        <S.H2 center marginBottom={spacing[5]}>
          Komentarze ({!quotation || quotation.commentsCount})
        </S.H2>
        {children}
      </section>
    </WithLoader>
  );
};

quotationDetails.propTypes = {
  children: element,
  history: history.isRequired,
  location: location.isRequired,
  quotation: quotationType
};

quotationDetails.defaultProps = {
  children: null,
  quotation: null
};

const mapStateToProps = state => ({
  quotation: getQuotationState(state),
  error: getErrorState(state)
});

export default compose(
  withRouter,
  withFirebase,
  withFirestore,
  connect(
    mapStateToProps,
    { resetQuotesError }
  ),
  firestoreConnect(props => [
    {
      collection: 'quotes',
      doc: props.match.params.id,
      storeAs: 'quotation'
    }
  ]),
  withErrorHandler({ actionName: 'resetQuotesError' })
)(quotationDetails);
