import React from 'react';
import { Spinner } from 'common';

// const withLoader = propName => WrappedComponent => {
//   return class LoaderHOC extends Component {
//     render() {
//       return !this.props[propName] ? (
//         <Spinner />
//       ) : (
//         <WrappedComponent {...this.props} />
//       );
//     }
//   };
// };

// export default withLoader;

// const withLoader = WrappedComponent => {
//   return ({ isLoading, ...props }) => {
//     if (!isLoading) return <WrappedComponent {...props} />;
//     return <Spinner />;
//   };
// };

// export default withLoader;

const withLoader = ({ isLoading, children }) => {
  if (isLoading) return <Spinner />;
  return children;
};

export default withLoader;
