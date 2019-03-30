import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'common';
import { H5 } from 'elements';

const withInfiniteScroll = ({
  counterName,
  actionName
}) => WrappedComponent => {
  return class extends Component {
    static propTypes = {
      actions: PropTypes.shape({
        [actionName]: PropTypes.func.isRequired
      }).isRequired,
      counters: PropTypes.shape({
        [counterName]: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      }).isRequired,
      pagination: PropTypes.shape({
        limit: PropTypes.number.isRequired,
        isLoading: PropTypes.bool.isRequired
      }).isRequired
    };

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
          {pagination.limit >= counters[counterName] &&
            !pagination.isLoading && (
              <H5 center>gratulacje! dotarłeś do końca</H5>
            )}
        </>
      );
    }
  };
};

export default withInfiniteScroll;
