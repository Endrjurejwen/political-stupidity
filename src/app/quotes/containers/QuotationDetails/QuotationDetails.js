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
import { getQuotationState, getErrorState } from 'app/quotes/selectors';
import { quotationType } from 'app/quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader, withErrorHandler } from 'app/common';
import { resetQuotesError } from 'app/quotes/actions';

import * as S from 'elements';

export const quotationDetails = ({ quotation, children }) => (
  <WithLoader isLoading={!quotation}>
    <Quotation
      quotation={quotation}
      navigateButton={<S.Button secondary>Powrót</S.Button>}
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
