import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener('click', listener);
    // document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      // document.removeEventListener('touchstart', listener);
    }
  }, []);
};

export default useOnClickOutside;
