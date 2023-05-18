import {openPopup, closePopup} from './utils.js';
import {avatarPopup, avatarButton, popupProfile, inputName, inputCareer, profileName, profileCareer, profileButton, popupAddContent, buttonForAddContent} from './modal.js'
import {createCard, cards, cardsArea} from './card.js';
import '../pages/index.css'; 

profileButton.addEventListener('click', function() {
  openPopup(popupProfile);
  inputCareer.value = profileCareer.textContent;
inputName.value = profileName.textContent;
});

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

  document.querySelectorAll('.popup__close').forEach(button => {
    const buttonsPopup = button.closest('.popup'); 
    button.addEventListener('click', () => closePopup(buttonsPopup)); 
  });  

  avatarButton.addEventListener('click', function() {
    openPopup(avatarPopup);
  });