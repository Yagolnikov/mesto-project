import { openPopup } from './utils.js';
import { deleteCard, likeCard, unlikeCard } from "./api.js";

function createCardElement(card, hasDeleteButton) {
  const { _id: cardId, link, name, likes } = card;
  let likesCount = likes.length;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = link;
  cardImage.alt = name;
  const cardTitle = cardElement.querySelector('.element__title');
  cardTitle.textContent = name;
  const buttonForLike = cardElement.querySelector('.element__like');
  const likeCounter = cardElement.querySelector('.element__counter');

  buttonForLike.addEventListener('click', function (event) {
    if (event.target.classList.contains('element__like_active')) {
      unlikeCard(cardId)
        .then((updatedCard) => {
          event.target.classList.remove('element__like_active');
          likesCount = updatedCard.likes.length;
          likeCounter.textContent = likesCount;
        })
        .catch((error) => {
          console.log('Ошибка при снятии лайка:', error);
        });
    } else {
      likeCard(cardId)
        .then((updatedCard) => {
          event.target.classList.add('element__like_active');
          likesCount = updatedCard.likes.length;
          likeCounter.textContent = likesCount;
        })
        .catch((error) => {
          console.log('Ошибка при постановке лайка:', error);
        });
    }
  });

  const buttonForDelete = cardElement.querySelector('.element__delete');
  if (hasDeleteButton) {
    buttonForDelete.addEventListener('click', function () {
      deleteCard(cardId)
        .then(() => {
          cardElement.remove();
        })
        .catch((error) => {
          console.log('Ошибка при удалении карточки:', error);
        });
    });
  } else {
    buttonForDelete.remove();
  }

  const buttonForZoom = cardImage;
  buttonForZoom.addEventListener('click', function () {
    openZoom(link, name);
  });

  likeCounter.textContent = likesCount;

  return cardElement;
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

const cardsArea = document.querySelector('.cards-area');

export {
  createCardElement,
  popupZoom,
  imageZoom,
  captureZoom,
  openZoom,
  cardsArea,
  cardTemplate
};

