import React from 'react';
import { element } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Quotation from 'app/quotes/components/Quotation';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  firestoreConnect,
  withFirebase,
  withFirestore
} from 'react-redux-firebase';
import { getUserInfoState } from 'app/auth/selectors';
import { makeGetQuotationState } from 'app/quotes/selectors';
import { quotationType } from 'app/quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader, withErrorHandler } from 'app/common';
import { resetQuotesError } from 'app/quotes/actions';

import * as S from 'elements';

const quotationDetails = ({ quotation, children }) => (
  <WithLoader isLoading={!quotation}>
    <Quotation
      quotation={quotation}
      navigateButton={<S.Button secondary>Wróć</S.Button>}
    />
    <section>
      <S.H2 center marginBottom={spacing[5]}>
        Komentarze ({!quotation || quotation.commentsCount})
      </S.H2>
      {children}
    </section>
  </WithLoader>
);

quotationDetails.propTypes = {
  children: element,
  quotation: quotationType
};

quotationDetails.defaultProps = {
  children: null,
  quotation: null
};

const makeMapStateToProps = () => {
  const getQuotationState = makeGetQuotationState();
  const mapStateToProps = (state, ownProps) => {
    return {
      quotation: getQuotationState(state, ownProps),
      user: getUserInfoState(state),
      error: state.quotes.error
    };
  };
  return mapStateToProps;
};

export default compose(
  withRouter,
  withFirebase,
  withFirestore,
  connect(
    makeMapStateToProps,
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
