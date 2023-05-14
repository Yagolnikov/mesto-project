import {openPopup} from './utils.js';

function createCard(link, title) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  cardImage.src = link;
  cardImage.alt = title;
  const cardTitle = card.querySelector('.element__title');
  cardTitle.textContent = title;
  const buttonForLike = card.querySelector('.element__like');
  buttonForLike.addEventListener('click', function(event) {
    event.target.classList.toggle('element__like_active');
  });
  const buttonForDelete = card.querySelector('.element__delete');
  buttonForDelete.addEventListener('click', function() {
    buttonForDelete.closest('.element').remove();
  });
  const buttonForZoom = card.querySelector('.element__image');
  buttonForZoom.addEventListener('click', function() {
    openZoom(link, title);
  });
  return card;
}

const cardTemplate = document.querySelector('#template-card-content').content;

const popupZoom = document.querySelector('.popup__open-content');
const imageZoom = popupZoom.querySelector('.popup__image-post');
const captureZoom = popupZoom.querySelector('.popup__capture-post');

function openZoom(link, title) {
  openPopup(popupZoom);
  imageZoom.src = link;
  imageZoom.alt = title;
  captureZoom.textContent = title;
}

const cards = [
  {
    name: 'Спас на крови',
    link: 'https://images.unsplash.com/photo-1554202218-20ee1af0fb17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Матрёшки',
    link: 'https://images.unsplash.com/photo-1526578410734-17a617547636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1552588355-23e1b81409cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'
  },
  {
    name: 'Питер',
    link: 'https://images.unsplash.com/photo-1555460285-763ba96917d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Московское метро',
    link: 'https://images.unsplash.com/photo-1551025578-9d65f4307723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Москва-сити',
    link: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];
const cardsArea = document.querySelector('.cards-area');  


export {createCard, popupZoom, imageZoom, captureZoom, openZoom, cards, cardsArea, cardTemplate};