import { useEffect } from 'react';

const useEscapeKey = handler => {
  useEffect(() => {
    const listener = event => {
      console.log(event.key);
      if (event.keyCode !== 27) {
        return;
      }
      handler();
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);
};

export default useEscapeKey;
