import React, { Component } from 'react';
import styled from 'styled-components';
import Quotation from 'quotes/components/Quotation';
import CommmentsList from 'comments/components/CommentsList';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Spinner } from 'common';
import { H2 } from 'elements';
import { spacing } from 'utils';
import {
  addToFavorites,
  removeFromFavorites,
  deleteQuotation
} from 'quotes/actions';

class QuotationDetails extends Component {
  toFavoritesHandler = () => {
    const {
      match,
      quotation,
      auth,
      addToFavorites,
      removeFromFavorites
    } = this.props;

    if (!(auth.uid in quotation.likes)) {
      addToFavorites(match.params.id);
    }
    if (auth.uid in quotation.likes) {
      removeFromFavorites(match.params.id);
    }
  };

  deleteQuotationHandler = () => {
    const { match, history, deleteQuotation } = this.props;
    deleteQuotation(match.params.id);
    history.push('/home');
  };

  render() {
    const { quotation, auth } = this.props;
    if (!quotation) {
      return <Spinner />;
    }
    return (
      <>
        <Quotation
          quotation={quotation}
          userId={auth.uid}
          likeClick={this.toFavoritesHandler}
          deleteClick={this.deleteQuotationHandler}
        />
        <Title>Komentarze</Title>
        <CommmentsList comments={quotation.comments} />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { quotes } = state.firestore.data;
  const quotation = quotes ? quotes[id] : null;

  return {
    quotation,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToFavorites,
      removeFromFavorites,
      deleteQuotation
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [{ collection: 'quotes' }])
)(QuotationDetails);

const Title = styled(H2)`
  text-align: center;
  margin-bottom: ${spacing[3]};
`;

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: 'quotes' }])
// )(QuotationDetails);
