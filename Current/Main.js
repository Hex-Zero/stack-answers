const popup = document.querySelector(".popup");
const editPopup = document.querySelector(".edit-popup");
const addPopup = document.querySelector(".add-popup");
const editButton = document.querySelector(".profile__edit-button");
const addForm = addPopup.querySelector(".popup__form");
const cardElements = document.querySelector(".element-grid");
const imagePopup = document.querySelector(".popup-image");
const addButton = document.querySelector(".profile__add-button");
const editForm = editPopup.querySelector(".popup__form");

const cardElementTemplate = document.querySelector("#grid-template").content;
const editPopupCloseButton = editPopup.querySelector(".popup__close-button");
const addPopupCloseButton = addPopup.querySelector(".popup__close-button");
const imagePopupCloseButton = imagePopup.querySelector(
  ".popup-image__close-button"
);

const jobPlace = document.querySelector(".profile__job");
const newImageName = addPopup.querySelector("#placeinput");
const newImageLink = addPopup.querySelector("#linkinput");

const nameInput = editPopup.querySelector("#nameinput");
const jobInput = editPopup.querySelector("#jobinput");
const namePlace = document.querySelector(".profile__name");

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const togglePopup = (popup) => {
  popup.classList.toggle("popup_active");
};
const deleteImage = (e) => {
  e.target.closest(".element-grid__element").remove();
};

imagePopup.addEventListener("click", function () {});

imagePopupCloseButton.addEventListener("click", function (e) {
  e.stopPropagation();

  togglePopup(imagePopup);
});

const showCard = (e) => {
  togglePopup(imagePopup);
  imagePopup.querySelector(".popup-image__image").src = e.target.src;
  imagePopup.querySelector(
    ".popup-image__text"
  ).textContent = e.target.nextElementSibling.querySelector(
    ".element-grid__text"
  ).textContent;
  imagePopupCloseButton.addEventListener("click", togglePopup);
};

const toggleLikeButton = (e) => {
  e.target.classList.toggle("element-grid__like-button_active");
};

const makeImage = (text, imageLink) => {
  const cardElement = cardElementTemplate.cloneNode(true);
  const cardElementPhoto = cardElement.querySelector(".element-grid__photo");
  const cardElementText = cardElement.querySelector(".element-grid__text");
  const cardElementLikeBtn = cardElement.querySelector(
    ".element-grid__like-button"
  );
  const cardElementDeleteBtn = cardElement.querySelector(
    ".element-grid__delete-button"
  );

  cardElementPhoto.src = imageLink;
  cardElementText.textContent = text;

  cardElementPhoto.setAttribute("alt", text);
  cardElementLikeBtn.addEventListener("click", toggleLikeButton);
  cardElementDeleteBtn.addEventListener("click", deleteImage);

  cardElementPhoto.addEventListener("click", showCard);

  return cardElement;
};
const renderImage = (card) => {
  cardElements.prepend(card);
};

initialCards.forEach((card) => {
  renderImage(makeImage(card.name, card.link));
});

editButton.addEventListener("click", function () {
  togglePopup(editPopup);
  jobInput.value = jobPlace.textContent;
  nameInput.value = namePlace.textContent;
});

const editSubmitHandler = (e) => {
  e.preventDefault();

  namePlace.textContent = nameInput.value;
  jobPlace.textContent = jobInput.value;
  togglePopup(editPopup);
};

const addSubmitHandler = (e) => {
  e.preventDefault();

  renderImage(makeImage(newImageName.value, newImageLink.value));
  addForm.reset();

  togglePopup(addPopup);
};

addPopupCloseButton.addEventListener("click", () => {
  togglePopup(addPopup);
});
addForm.addEventListener("submit", addSubmitHandler);

editForm.addEventListener("submit", editSubmitHandler);

addButton.addEventListener("click", () => {
  togglePopup(addPopup);
});

editPopupCloseButton.addEventListener("click", () => {
  togglePopup(editPopup);
});

/*
imagePopupCloseButton.addEventListener('click', () => {
    togglePopup(imagePopup);
})*/

const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.classList.add(settings.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.reset();
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, settings);
  } else {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const submitButton = formElement.querySelector(settings.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input load", (evt) => {
      console.log("hi");
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, submitButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-message_visible",
});
