import { openPopup, closePopup } from './utils.js';
import { handleAvatarFormSubmit, avatarPopup, avatarButton, popupProfile, inputName, inputCareer, profileName, profileCareer, profileButton, popupAddContent, buttonForAddContent } from './modal.js';
import { createCardElement, cardsArea } from './card.js';
import {fetchCards, createNewCard, fetchUserProfile } from "./api.js";

import '../pages/index.css';

profileButton.addEventListener('click', function() {
  openPopup(popupProfile);
  inputCareer.value = profileCareer.textContent;
  inputName.value = profileName.textContent;
});


buttonForAddContent.addEventListener(`click`, function(){
  openPopup(popupAddContent);
});

const setUserInfo = (user) => {
  const { name, about, avatar } = user;
  const profileTitleElement = document.querySelector('.profile__title');
  const profileSubtitleElement = document.querySelector('.profile__subtitle');
  const profileAvatar = document.querySelector('.profile__avatar');

  if (profileTitleElement) {
    profileTitleElement.textContent = name;
  }
  if (profileSubtitleElement) {
    profileSubtitleElement.textContent = about;
  }
  if (profileAvatar) {
    profileAvatar.src = avatar;
    profileAvatar.alt = name;
  }
};

fetchUserProfile().then(currentUser => {
  setUserInfo(currentUser);

  fetchCards()
    .then((cards) => {
      cards.forEach((card) => {
        const isOwnCard = card.owner._id === currentUser._id;
        const newCard = createCardElement(card, isOwnCard);
        cardsArea.appendChild(newCard);
      });
    })
    .catch((error) => {
      console.log('Ошибка при загрузке карточек:', error);
    });
})

function addCard(link, title) {
  createNewCard(title, link)
    .then((card) => {
      const newCard = createCardElement(card, true);
      cardsArea.prepend(newCard);
    })
    .catch((error) => {
      console.log('Ошибка в создании новой карточки:', error);
    });
}

avatarPopup.addEventListener('submit', handleAvatarFormSubmit);

document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});

avatarButton.addEventListener('click', function() {
  openPopup(avatarPopup);
});

export { addCard };