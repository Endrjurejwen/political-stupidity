import { useEffect } from 'react';

const useAutoFocus = autoFocusRef => {
  useEffect(() => {
    const focusedElementBeforeModal = document.activeElement;
    if (autoFocusRef.current) {
      autoFocusRef.current.focus();
    }
    return () => {
      focusedElementBeforeModal.focus();
    };
  }, [autoFocusRef]);
};

export default useAutoFocus;
