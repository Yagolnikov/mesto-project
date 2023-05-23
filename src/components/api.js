const APISettings = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-22",
  headers: {
    authorization: "a2fa7288-5120-4060-9238-66d0d9b8c028",
    "Content-Type": "application/json",
  },
};

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
}

const sendRequest = (url, options) => {
  return fetch(url, options).then((response) => handleResponse(response));
};

const fetchCards = () => {
  return sendRequest(`${APISettings.baseUrl}/cards`, {
    headers: APISettings.headers,
  });
};

const fetchUserProfile = () => {
  return sendRequest(`${APISettings.baseUrl}/users/me`, {
    headers: APISettings.headers,
  });
};

const updateProfileContent = (name, about) => {
  return sendRequest(`${APISettings.baseUrl}/users/me`, {
    method: "PATCH",
    headers: APISettings.headers,
    body: JSON.stringify({
      name,
      about,
    }),
  });
};

const createNewCard = (cardName, cardLink) => {
  return sendRequest(`${APISettings.baseUrl}/cards`, {
    method: "POST",
    headers: APISettings.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink,
    }),
  });
};

const deleteCard = (cardId) => {
  return sendRequest(`${APISettings.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: APISettings.headers,
  });
};

const likeCard = (cardId) => {
  return sendRequest(`${APISettings.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: APISettings.headers,
  });
};

const unlikeCard = (cardId) => {
  return sendRequest(`${APISettings.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: APISettings.headers,
  });
};

const addNewAvatar = (avatar) => {
  return sendRequest(`${APISettings.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: APISettings.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  });
};

export {
  fetchUserProfile,
  fetchCards,
  updateProfileContent,
  createNewCard,
  deleteCard,
  likeCard,
  unlikeCard,
  addNewAvatar,
  sendRequest,
};
