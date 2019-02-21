/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Header from 'dashboard/components/Header';
import Panel from 'dashboard/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { Spinner } from 'common';
import { H5 } from 'elements';

const FAKE_QUOTES = [
  {
    body:
      'Wtedy, kiedy dinozaury jeszcze były, a ludzie nie mieli żadnych strzelb, nie mieli żadnej broni nowoczesnej, która pozwoliłaby ich zabić.',
    author: 'Ewa Kopacz',
    user: 'Biedny Obywatel',
    likes: 34,
    timestamp: '12-02-2019',
    id: 'gfh5465464654g4',
    comments: [
      {
        body: 'to się popisała Pani Premier :)',
        likes: 25,
        user: 'Jaś Gamoń',
        id: 't53regfdgdf'
      },
      {
        body: 'Hahahahaha, nie wierzę',
        likes: 7,
        user: 'Inny Gamoń',
        id: 'sdfdsf45tgdgf'
      }
    ]
  },
  {
    body:
      'Założenie przypadkowego powstania życia niczym się nie różni od rozumowania, że tornado przechodzące przez samolotowe złomowisko może złożyć boeinga 747 gotowego do lotu.',
    author: 'Maciej Giertych',
    user: 'Bartłomiej Kowalski',
    likes: 23,
    timestamp: '14-02-2019',
    id: 'sdfsdgfgfdgfdg',
    comments: [
      {
        body: 'Jego to ewolucja nie rusza',
        likes: 12,
        user: 'Jan Nowak',
        id: 'sgfsg45gsdgdf'
      },
      {
        body: 'Hahahahaha, nie no, ten to wymyślił',
        likes: 19,
        user: 'Halina Konopna',
        id: 'dsgdfgdff44gdfg'
      }
    ]
  }
];

class Dashboard extends Component {
  navigationToQuotationDetailsHandler = id => {
    const { history } = this.props;
    history.push(`/quotes/${id}`);
  };

  render() {
    const { quotes } = this.props;

    let quotesBox;
    if (!quotes) {
      quotesBox = <Spinner />;
    }
    if (quotes && !quotes.length) {
      quotesBox = (
        <H5 center data-testid="information">
          Nie ma jeszcze żadnych cytatów
        </H5>
      );
    }
    if (quotes && quotes.length) {
      quotesBox = (
        <QuotesList
          navigationClick={this.navigationToQuotationDetailsHandler}
          quotes={quotes}
        />
      );
    }
    return (
      <>
        <Header />
        <Panel />
        {quotesBox}
      </>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.firestore.ordered.quotes
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'quotes'
    }
  ])
)(Dashboard);
