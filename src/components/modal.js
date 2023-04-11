import {openPopup, resetForm, closePopup, keyHandler, handlePopupClick} from './utils.js';
import {addCard} from './index.js';


const popupProfile = document.querySelector('.popup__profile');
const profilePopup = document.querySelector('.popup');
const inputName = document.querySelector('.form__item_heading');
const inputCareer = document.querySelector('.form__item_career');

const profileSubmitButton = document.querySelector('.form__button');
const profileButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileCareer = document.querySelector('.profile__subtitle');


profileSubmitButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (document.forms['edit-profile'].checkValidity()) {
    profileCareer.textContent = inputCareer.value;
    profileName.textContent = inputName.value;
    closePopup(profilePopup);
  }
});

const popupAddContent = document.querySelector('.popup__add_content');
const buttonForAddContent = document.querySelector('.profile__add-button');
const inputFotoTitle = document.querySelector('#new-url');
const inputNewFoto = document.querySelector('#new-card');
const buttonForSubmitContent = document.querySelector('.form__button_add_content');

buttonForSubmitContent.addEventListener(`click`, function(event){
  event.preventDefault();
  addCard(inputFotoTitle.value, inputNewFoto.value);
  inputNewFoto.value = '';
  inputFotoTitle.value = '';
  closePopup(popupAddContent);
});

const profileAvatar = document.querySelector('.profile__avatar');
const avatarPopup = document.querySelector('.popup__edit_avatar');
const avatarButton = document.querySelector('.profile__overlay');
const avatarSubmitButton = document.querySelector('.form__button_edit_avatar');
const inputAvatar = document.querySelector('#new-avatar');
avatarSubmitButton.addEventListener('click', function(event) {
  event.preventDefault();
  profileAvatar.src = inputAvatar.value;
  closePopup(avatarPopup);
});



export {profileAvatar, avatarPopup, avatarButton, avatarSubmitButton, inputAvatar, popupProfile, profilePopup, inputName, inputCareer, profileSubmitButton, profileName, profileCareer, profileButton, popupAddContent, buttonForAddContent, inputFotoTitle, inputNewFoto, buttonForSubmitContent};
