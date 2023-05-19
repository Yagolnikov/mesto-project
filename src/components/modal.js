import { closePopup } from './utils.js';
import { addCard } from './index.js';

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
const inputFotoTitle = document.querySelector('#new-url');
const inputNewFoto = document.querySelector('#new-card');
const buttonForSubmitContent = document.querySelector('.form__button_add_content');

const profileAvatar = document.querySelector('.profile__avatar');
const avatarPopup = document.querySelector('.popup__edit_avatar');
const avatarButton = document.querySelector('.profile__overlay');
const avatarSubmitButton = document.querySelector('.form__button_edit_avatar');
const inputAvatar = document.querySelector('#new-avatar');

profileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (profileForm.checkValidity()) {
    profileCareer.textContent = inputCareer.value;
    profileName.textContent = inputName.value;
    closePopup(profilePopup);
  }
});

popupAddContent.addEventListener('submit', function (event) {
  event.preventDefault();
  const titleValue = inputFotoTitle.value.trim();
  const photoValue = inputNewFoto.value.trim();
  const isFormValid = titleValue !== '' && photoValue !== '';
  if (isFormValid) {
    addCard(titleValue, photoValue);
    inputNewFoto.value = '';
    inputFotoTitle.value = '';
    closePopup(popupAddContent);
  } else {
    buttonForSubmitContent.classList.add('disabled');
    buttonForSubmitContent.disabled = true;
  }
});

avatarPopup.addEventListener('submit', function (event) {
  event.preventDefault();
  profileAvatar.src = inputAvatar.value;
  closePopup(avatarPopup);
});


export {
  profileAvatar, avatarPopup, avatarButton, avatarSubmitButton, inputAvatar, popupProfile, profilePopup, inputName, inputCareer, profileSubmitButton, profileName, profileCareer, profileButton, popupAddContent, buttonForAddContent, inputFotoTitle, inputNewFoto};
