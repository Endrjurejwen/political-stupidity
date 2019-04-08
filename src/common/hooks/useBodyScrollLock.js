import { useLayoutEffect } from 'react';

const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
};

export default useBodyScrollLock;

// const useBodyScrollLock = () => {
//   useLayoutEffect(() => {
//     const originalOverflow = window.getComputedStyle(document.body).overflow;
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.body.style.overflow = originalOverflow;
//     };
//   }, []);
// };
