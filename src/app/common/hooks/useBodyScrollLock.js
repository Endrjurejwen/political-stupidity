import { useLayoutEffect } from 'react';

const useBodyScrollLock = () => {
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollBarWidth = windowWidth - documentWidth;

  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight = window.getComputedStyle(document.body)
      .marginRight;
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scrollBarWidth}px`;
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.marginRight = originalPaddingRight;
    };
  }, []);
};

export default useBodyScrollLock;
