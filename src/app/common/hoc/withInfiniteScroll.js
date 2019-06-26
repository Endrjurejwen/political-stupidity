/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react';
import { shape, func, oneOfType, string, bool, number } from 'prop-types';
import { Spinner } from 'app/common';
import { H5 } from 'elements';

const withInfiniteScroll = ({
  counterName,
  actionName
}) => WrappedComponent => {
  return class extends Component {
    static propTypes = {
      [actionName]: func.isRequired,
      counters: shape({
        [counterName]: oneOfType([string, number])
      }).isRequired,
      pagination: shape({
        limit: number.isRequired,
        isLoading: bool.isRequired
      }).isRequired
    };

    componentDidMount = () => {
      window.addEventListener('scroll', this.onScroll);
    };

    componentWillUnmount = () => {
      window.removeEventListener('scroll', this.onScroll);
    };

    onScroll = () => {
      const {
        counters,
        pagination: { isLoading, limit }
      } = this.props;
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight; // "document.body.offsetHeight - 300" if you want load before bottom
      const isMoreContent = limit < counters[counterName];
      if (isBottom && isMoreContent && !isLoading) {
        this.props[actionName]();
      }
    };

    render() {
      const {
        counters,
        pagination: { limit, initialLimit, isLoading }
      } = this.props;
      const isReachEnd =
        limit >= counters[counterName] && counters[counterName] > initialLimit;
      return (
        <>
          <WrappedComponent {...this.props} />
          {isLoading && <Spinner bgColor="#F4F4F4" />}
          {!isLoading && isReachEnd && (
            <H5 center>gratulacje! dotarłeś do końca</H5>
          )}
        </>
      );
    }
  };
};

export default withInfiniteScroll;
