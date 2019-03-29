import React, { Component } from 'react';
import { Spinner } from 'common';
import { H5 } from 'elements';

const withInfiniteScroll = ({
  counterName,
  actionName
}) => WrappedComponent => {
  return class extends Component {
    componentDidMount = () => {
      window.addEventListener('scroll', this.onScroll);
    };

    componentWillUnmount = () => {
      window.removeEventListener('scroll', this.onScroll);
    };

    onScroll = () => {
      const { actions, counters, pagination } = this.props;
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight; // "document.body.offsetHeight - 300" if you want load before bottom
      const isMoreContent = pagination.limit < counters[counterName];
      if (isBottom && isMoreContent && !pagination.isLoading) {
        actions[actionName]();
      }
    };

    render() {
      const { pagination, counters } = this.props;
      return (
        <>
          <WrappedComponent {...this.props} />
          {pagination.isLoading && <Spinner />}
          {pagination.limit > counters[counterName] &&
            !pagination.isLoading && (
              <H5 center>gratulacje! dotarłeś do końca</H5>
            )}
        </>
      );
    }
  };
};

export default withInfiniteScroll;
