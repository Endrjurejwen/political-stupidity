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

  const isActiveFirstTab = () => document.activeElement === firstTabStop;
  const isActiveLastTab = () => document.activeElement === lastTabStop;

  switch (event.keyCode) {
    case 9:
      if (event.shiftKey && isActiveFirstTab()) {
        event.preventDefault();
        lastTabStop.focus();
      } else if (isActiveLastTab()) {
        event.preventDefault();
        firstTabStop.focus();
      }
      break;
    case 27:
      close();
      focusedElementBeforeModal.focus();
      break;
    default:
      break;
  }
};

export default trapTabKey;
