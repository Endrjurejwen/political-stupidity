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
          {isLoading && <Spinner />}
          {!isLoading && isReachEnd && (
            <H5 center>gratulacje! dotarłeś do końca</H5>
          )}
        </>
      );
    }
  };
};

export default withInfiniteScroll;

// import React, { Component } from 'react';
// import { shape, func, oneOfType, string, bool, number } from 'prop-types';
// import { Spinner } from 'common';
// import { H5 } from 'elements';

// const withInfiniteScroll = ({
//   counterName,
//   actionName
// }) => WrappedComponent => {
//   return class extends Component {
//     static propTypes = {
//       [actionName]: func.isRequired,
//       counters: shape({
//         [counterName]: oneOfType([string, number])
//       }).isRequired,
//       pagination: shape({
//         limit: number.isRequired,
//         isLoading: bool.isRequired
//       }).isRequired
//     };

//     // static defaultProps = {
//     //   actions: null
//     // };

//     componentDidMount = () => {
//       window.addEventListener('scroll', this.onScroll);
//     };

//     componentWillUnmount = () => {
//       window.removeEventListener('scroll', this.onScroll);
//     };

//     onScroll = () => {
//       const { counters, pagination } = this.props;
//       const isBottom =
//         window.innerHeight + window.scrollY >= document.body.offsetHeight; // "document.body.offsetHeight - 300" if you want load before bottom
//       const isMoreContent = pagination.limit < counters[counterName];
//       if (isBottom && isMoreContent && !pagination.isLoading) {
//         this.props[actionName]();
//       }
//     };

//     // zamienić quotes na isLoading!!!
//     render() {
//       const { pagination, counters } = this.props;
//       console.log([counterName.length]);
//       return (
//         <>
//           <WrappedComponent {...this.props} />
//           {pagination.isLoading && <Spinner />}
//           {pagination.limit >= counters[counterName] &&
//             !pagination.isLoading &&
//             [counterName].length > 0 && (
//               <H5 center>gratulacje! dotarłeś do końca</H5>
//             )}
//         </>
//       );
//     }
//   };
// };

// export default withInfiniteScroll;

// import React, { Component } from 'react';
// import { shape, func, oneOfType, string, bool, number } from 'prop-types';
// import { Spinner } from 'common';
// import { H5 } from 'elements';

// const withInfiniteScroll = ({
//   counterName,
//   actionName
// }) => WrappedComponent => {
//   return class extends Component {
//     static propTypes = {
//       [actionName]: func.isRequired,
//       counters: shape({
//         [counterName]: oneOfType([string, number])
//       }).isRequired,
//       pagination: shape({
//         limit: number.isRequired,
//         isLoading: bool.isRequired
//       }).isRequired
//     };

//     // static defaultProps = {
//     //   actions: null
//     // };

//     componentDidMount = () => {
//       window.addEventListener('scroll', this.onScroll);
//     };

//     componentWillUnmount = () => {
//       window.removeEventListener('scroll', this.onScroll);
//     };

//     onScroll = () => {
//       const { counters, pagination } = this.props;
//       const isBottom =
//         window.innerHeight + window.scrollY >= document.body.offsetHeight; // "document.body.offsetHeight - 300" if you want load before bottom
//       const isMoreContent = pagination.limit < counters[counterName];
//       if (isBottom && isMoreContent && !pagination.isLoading) {
//         this.props[actionName]();
//       }
//     };

//     render() {
//       const { pagination, counters } = this.props;
//       // const InitialLimit = 2;
//       const isReachEnd =
//         pagination.limit >= counters[counterName] &&
//         counters[counterName] > pagination.initialLimit;
//       return (
//         <>
//           <WrappedComponent {...this.props} />
//           {pagination.isLoading && <Spinner />}
//           {!pagination.isLoading && isReachEnd && (
//             <H5 center>gratulacje! dotarłeś do końca</H5>
//           )}
//         </>
//       );
//     }
//   };
// };

// export default withInfiniteScroll;
