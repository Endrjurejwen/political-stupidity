import React, { useEffect } from 'react';
import { func, element } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Quotation from 'quotes/components/Quotation';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import {
  firestoreConnect,
  withFirebase,
  withFirestore
} from 'react-redux-firebase';
import { getUserInfoState } from 'auth/selectors';
import { makeGetQuotationState } from 'quotes/selectors';
import { quotationType } from 'quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader, withErrorHandler } from 'common';
import { Button, H2 } from 'elements';
import { resetQuotesError } from 'quotes/actions';

const quotationDetails = ({ quotation, children, dispatch }) => {
  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.CLEAR_DATA });
    };
  }, []);

  return (
    <WithLoader isLoading={!quotation}>
      <Quotation
        quotation={quotation}
        navigateButton={<Button secondary>Wróć</Button>}
      />
      <section>
        <H2 center marginBottom={spacing[5]}>
          Komentarze ({!quotation || quotation.commentsCount})
        </H2>
        {children}
      </section>
    </WithLoader>
  );
};

quotationDetails.propTypes = {
  children: element,
  dispatch: func.isRequired,
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
  connect(makeMapStateToProps, { resetQuotesError }),
  firestoreConnect(props => [
    {
      collection: 'quotes',
      doc: props.match.params.id,
      storeAs: 'quotation'
    }
  ]),
  withErrorHandler({ actionName: 'resetQuotesError' })
)(quotationDetails);

// import React, { Component } from 'react';
// import { func, element } from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import Quotation from 'quotes/components/Quotation';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import { actionTypes } from 'redux-firestore';
// import {
//   firestoreConnect,
//   withFirebase,
//   withFirestore
// } from 'react-redux-firebase';
// import { getUserInfoState } from 'auth/selectors';
// import { makeGetQuotationState } from 'quotes/selectors';
// import { quotationType } from 'quotes/propTypes';
// import { spacing } from 'utils';
// import { WithLoader } from 'common';
// import { Button, H2 } from 'elements';

// class QuotationDetails extends Component {
//   static propTypes = {
//     children: element,
//     dispatch: func.isRequired,
//     quotation: quotationType
//   };

//   static defaultProps = {
//     children: null,
//     quotation: null
//   };

//   componentWillUnmount = () => {
//     this.props.dispatch({ type: actionTypes.CLEAR_DATA });
//   };

//   render() {
//     const { quotation, children } = this.props;
//     return (
//       <WithLoader isLoading={!quotation}>
//         <Quotation quotation={quotation} />
//         <section>
//           <H2 center marginBottom={spacing[5]}>
//             Komentarze ({!quotation || quotation.commentsCount})
//           </H2>
//           {children}
//         </section>
//       </WithLoader>
//     );
//   }
// }

// const makeMapStateToProps = () => {
//   const getQuotationState = makeGetQuotationState();
//   const mapStateToProps = (state, ownProps) => {
//     return {
//       quotation: getQuotationState(state, ownProps),
//       user: getUserInfoState(state)
//     };
//   };
//   return mapStateToProps;
// };

// export default compose(
//   withRouter,
//   withFirebase,
//   withFirestore,
//   connect(makeMapStateToProps),
//   firestoreConnect(props => [
//     {
//       collection: 'quotes',
//       doc: props.match.params.id,
//       storeAs: 'quotation'
//     }
//   ])
// )(QuotationDetails);
