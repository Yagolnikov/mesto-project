  const showInputError = (inputElement, errorElement, errorMessage) => {
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  };
    
  const hideInputError = (inputElement, errorElement) => {
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  };
  
  const isValid = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
      showInputError(inputElement, inputElement.nextElementSibling, inputElement.validationMessage);
    } else {
      hideInputError(inputElement, inputElement.nextElementSibling);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__item"));
    const buttonElement = formElement.querySelector(".form__button");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
    toggleButtonState(inputList, buttonElement);
  };
  
  const hasInvalidInput = (inputList) => {
    return !inputList.every((inputElement) => {
      return inputElement.validity.valid;
    });
  };
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add("form__button_inactive");
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove("form__button_inactive");
    }
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
  
  enableValidation();

  export {showInputError, hideInputError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation}; 