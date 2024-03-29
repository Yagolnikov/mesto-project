import { hideInputError, toggleButtonState, validationFormConfig } from './validation.js';

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', handlePopupClick);
  document.addEventListener('keydown', handleKeyEvent);
};

const resetForm = (formElement) => {
  if (!formElement) return;
  formElement.reset();
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  const buttonElement = formElement.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    hideInputError(inputElement, inputElement.nextElementSibling, validationFormConfig);
  });
};

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  popupElement.removeEventListener('click', handlePopupClick);
  document.removeEventListener('keydown', handleKeyEvent);
};

function handleKeyEvent(evt) {
  if (evt.key === 'Escape') {
    const popupElement = document.querySelector('.popup_opened');
    if (popupElement) {
      closePopup(popupElement);
    }
  }
}

function handlePopupClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

const popups = Array.from(document.querySelectorAll('.popup'));
popups.forEach((popup) => {
  popup.addEventListener('click', handlePopupClick);
});

export { openPopup, resetForm, closePopup, handleKeyEvent, handlePopupClick };
