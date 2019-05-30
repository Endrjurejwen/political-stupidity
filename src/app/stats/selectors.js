import { createStructuredSelector } from 'reselect';

const getCounters = state => state.firestore.data.counters;

const getCommentsCounter = state => {
  const counters = getCounters(state);
  const commentsCounter = counters ? counters.comments.number : '--';
  return commentsCounter;
};

const getQuotesCounter = state => {
  const counters = getCounters(state);
  const quotesCounter = counters ? counters.quotes.number : '--';
  return quotesCounter;
};

export const getCountersState = createStructuredSelector({
  comments: getCommentsCounter,
  quotes: getQuotesCounter
});
