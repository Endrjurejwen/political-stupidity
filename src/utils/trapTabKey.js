const getFocusableElementsString = () =>
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const trapTabKey = (event, close) => {
  const modalElement = document.querySelector('.modal');
  if (!modalElement) {
    return null;
  }

  const focusedElementBeforeModal = document.activeElement;

  const focusableElementsString = getFocusableElementsString();
  const focusableElements = [
    ...modalElement.querySelectorAll(focusableElementsString)
  ];

  const firstTabStop = focusableElements[0];
  const lastTabStop = focusableElements[focusableElements.length - 1];

  if (event.keyCode === 9) {
    if (event.shiftKey) {
      if (document.activeElement === firstTabStop) {
        event.preventDefault();
        lastTabStop.focus();
      }
    } else if (document.activeElement === lastTabStop) {
      event.preventDefault();
      firstTabStop.focus();
    }
  }

  if (event.keyCode === 27) {
    close();
    focusedElementBeforeModal.focus();
  }
};

export default trapTabKey;
