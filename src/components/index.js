import {showInputError, hideInputError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation} from './validation.js';
import {openPopup, resetForm, closePopup, keyHandler, handlePopupClick} from './utils.js';
import {profileAvatar, avatarPopup, avatarButton, avatarSubmitButton, inputAvatar, popupProfile, profilePopup, inputName, inputCareer, profileSubmitButton, profileName, profileCareer, profileButton, popupAddContent, buttonForAddContent, inputFotoTitle, inputNewFoto, buttonForSubmitContent} from './modal.js'
import {cardTemplate, createCard, popupZoom, imageZoom, captureZoom, openZoom, cards, cardsArea} from './card.js';
import '../pages/index.css'; 

profileButton.addEventListener('click', function() {
  openPopup(popupProfile);

});

inputCareer.value = profileCareer.textContent;
inputName.value = profileName.textContent;

buttonForAddContent.addEventListener(`click`, function(){
  openPopup(popupAddContent);
});

for (let i = 0; i < cards.length; i++) {
  const card = createCard(cards[i].link, cards[i].name);
  cardsArea.appendChild(card);
}

export function addCard(link, title) {
  cardsArea.prepend(createCard(link, title));
}

for (let i = 0; i < cards.length; i++) {
  const card = createCard(cards[i].link, cards[i].name);
  cardsArea.appendChild(card);
}

  document.addEventListener('click', handlePopupClick);
  document.addEventListener('keydown', keyHandler);

  document.querySelectorAll('.popup__close').forEach(button => {
    const buttonsPopup = button.closest('.popup'); 
    button.addEventListener('click', () => closePopup(buttonsPopup)); 
  });  

  avatarButton.addEventListener('click', function() {
    openPopup(avatarPopup);
  });