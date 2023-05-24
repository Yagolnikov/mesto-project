import { closePopup } from './utils.js';
import { addNewAvatar, updateProfileContent, createNewCard } from './api.js';
import { createCardElement, cardsArea } from './card.js';

const popupProfile = document.querySelector('.popup__profile');
const profilePopup = document.querySelector('.popup');
const inputName = document.querySelector('.form__item_heading');
const inputCareer = document.querySelector('.form__item_career');

const profileForm = document.forms['edit-profile'];
const profileSubmitButton = profileForm.querySelector('.form__button');
const profileButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileCareer = document.querySelector('.profile__subtitle');


const popupAddContent = document.querySelector('.popup__add_content');
const buttonForAddContent = document.querySelector('.profile__add-button');
const inputNewFoto = document.querySelector('#new-url');
const inputFotoTitle = document.querySelector('#new-card');
const buttonForSubmitContent = document.querySelector('.form__button_add_content');

const profileAvatar = document.querySelector('.profile__avatar');
const avatarPopup = document.querySelector('.popup__edit_avatar');
const avatarButton = document.querySelector('.profile__overlay');
const avatarSubmitButton = document.querySelector('.form__button_edit_avatar');
const inputAvatar = document.querySelector('#new-avatar');

profileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = inputName.value;
  const about = inputCareer.value;

  profileSubmitButton.textContent = 'Сохранение...';
  updateProfileContent(name, about)
    .then((data) => {
      profileCareer.textContent = data.about;
      profileName.textContent = data.name;
      closePopup(profilePopup);
    })
    .catch((error) => {
      console.log("Ошибка в обновлении профиля:", error);
    })
    .finally(() => {
      profileSubmitButton.textContent = 'Сохранить';
    });
});

popupAddContent.addEventListener('submit', function (event) {
  event.preventDefault();
  const titleValue = inputFotoTitle.value.trim();
  const photoValue = inputNewFoto.value.trim();
  const isFormValid = titleValue !== '' && photoValue !== '';

  if (isFormValid) {
    buttonForSubmitContent.textContent = 'Сохранение...';
    createNewCard(titleValue, photoValue)
      .then((card) => {
        const newCard = createCardElement(card, true);
        cardsArea.prepend(newCard);
        inputNewFoto.value = '';
        inputFotoTitle.value = '';
        closePopup(popupAddContent);
      })
      .catch((error) => {
        console.log('Ошибка в создании новой карточки:', error);
      })
      .finally(() => {
        buttonForSubmitContent.textContent = 'Сохранить';
      });
  } else {
    buttonForSubmitContent.classList.add('disabled');
    buttonForSubmitContent.disabled = true;
  }
  buttonForSubmitContent.classList.remove('disabled');
  buttonForSubmitContent.disabled = false;
});

const handleAvatarFormSubmit = (event) => {
  event.preventDefault();
  const avatar = inputAvatar.value;
  avatarSubmitButton.textContent = 'Сохранение...';
  addNewAvatar(avatar)
    .then((data) => {
      profileAvatar.src = data.avatar;
      closePopup(avatarPopup);
      event.target.reset();
    })
    .catch((error) => {
      console.log("Ошибка в обновлении аватара:", error);
    })
    .finally(() => {
      avatarSubmitButton.textContent = 'Сохранить';
    });
};

avatarPopup.addEventListener('submit', handleAvatarFormSubmit);




export {
  handleAvatarFormSubmit,profileAvatar, avatarPopup, avatarButton, avatarSubmitButton, inputAvatar, popupProfile, profilePopup, inputName, inputCareer, profileSubmitButton, profileName, profileCareer, profileButton, popupAddContent, buttonForAddContent, inputFotoTitle, inputNewFoto};
