import { closePopup } from './utils.js';
import { addCard } from './index.js';
import { addNewAvatar, updateProfileContent } from './api.js';

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
  const name = inputName.value;
  const about = inputCareer.value;

  if (profileForm.checkValidity()) {
    profileSubmitButton.textContent = 'Сохранение...';
    setTimeout(() => {
      updateProfileContent(name, about).then(() => {
        profileCareer.textContent = about;
        profileName.textContent = name;
        closePopup(profilePopup);
        profileSubmitButton.textContent = 'Сохранить';
      });
    }, 1000);
  }
});

popupAddContent.addEventListener('submit', function (event) {
  event.preventDefault();
  const titleValue = inputFotoTitle.value.trim();
  const photoValue = inputNewFoto.value.trim();
  const isFormValid = titleValue !== '' && photoValue !== '';

  if (isFormValid) {
    buttonForSubmitContent.textContent = 'Сохранение...';
    setTimeout(() => {
      addCard(titleValue, photoValue);
      inputNewFoto.value = '';
      inputFotoTitle.value = '';
      closePopup(popupAddContent);
      buttonForSubmitContent.textContent = 'Сохранить';
    }, 1000);
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
  setTimeout(() => {
    addNewAvatar(avatar)
      .then((res) => {
        profileAvatar.src = res.avatar;
        closePopup(avatarPopup);
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
    avatarSubmitButton.textContent = 'Сохранить';
  }, 1000);
};




avatarPopup.addEventListener('submit', handleAvatarFormSubmit);



export {
  handleAvatarFormSubmit,profileAvatar, avatarPopup, avatarButton, avatarSubmitButton, inputAvatar, popupProfile, profilePopup, inputName, inputCareer, profileSubmitButton, profileName, profileCareer, profileButton, popupAddContent, buttonForAddContent, inputFotoTitle, inputNewFoto};
