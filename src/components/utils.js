import {showInputError, hideInputError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation} from './validation.js';

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};
const resetForm = (formElement) => {
  if (!formElement) return;
  formElement.reset();
  const inputList = Array.from(formElement.querySelectorAll(".form__item"));
  const buttonElement = formElement.querySelector(".form__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    hideInputError(inputElement, inputElement.nextElementSibling);
  });
};

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  resetForm(popupElement.querySelector('.form'));
};
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));   
  }
}

function handlePopupClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}



  export {openPopup, resetForm, closePopup, keyHandler, handlePopupClick}; 