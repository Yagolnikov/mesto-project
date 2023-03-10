const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

const profilePopup = document.querySelector('.popup');
const profileButton = document.querySelector('.profile__edit-button');
const inputName = document.querySelector('.form__item-heading');
const profileName = document.querySelector('.profile__title');
const profileCareer = document.querySelector('.profile__subtitle');
const inputCareer = document.querySelector('.form__item-career');
const profileSubmitButton = document.querySelector('.form__button');

profileButton.addEventListener('click', function() {
  openPopup(profilePopup);
  inputCareer.value = profileCareer.textContent;
  inputName.value = profileName.textContent;
});

document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup'); 
  button.addEventListener('click', () => closePopup(buttonsPopup)); 
});  

profileSubmitButton.addEventListener('click', function(event) {
  event.preventDefault();
  profileCareer.textContent = inputCareer.value;
  profileName.textContent = inputName.value;
  closePopup(profilePopup);
});

const popupAddContent = document.querySelector('.popup__add_content');
const buttonForAddContent = document.querySelector('.profile__add-button');
const inputFotoTitle = document.querySelector('.form__item-career_add');
const inputNewFoto = document.querySelector('.form__item-heading_add');
const buttonForSubmitContent = document.querySelector('.form__button_add_content');

buttonForAddContent.addEventListener(`click`, function(){
  openPopup(popupAddContent);
});


buttonForSubmitContent.addEventListener(`click`, function(event){
  event.preventDefault();
  addCard(inputFotoTitle.value, inputNewFoto.value);
  inputNewFoto.value = '';
  inputFotoTitle.value = '';
  closePopup(popupAddContent);
});

const cardsArea = document.querySelector('.cards-area');
const cardTemplate = document.querySelector('#template-card-content').content;

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

function addCard(link, title) {
  cardsArea.prepend(createCard(link, title));
}

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

for (let i = 0; i < cards.length; i++) {
  const card = createCard(cards[i].link, cards[i].name);
  cardsArea.appendChild(card);
}