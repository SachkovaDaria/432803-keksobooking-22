import { DEFAULT_ADRESS } from './utils.js';
import { createAd } from './api.js';
import { showErrorMessage, showSuccessMessage } from './utils.js';
import { resetMainPin, resetMapForm } from './map.js';
import { setBackgroundPic, setAvatarPic, setHandlerPic, resetAvatarPic, resetBackgroundPic } from './check-picture.js';


const form = document.querySelector('.ad-form');

const formPriceElement = form.querySelector('#price');
const formTypeElement = form.querySelector('#type');
const formTitleElement = form.querySelector('#title');
const formCleanButton = form.querySelector('.ad-form__reset');
const formAddressElement = form.querySelector('#address');
const formAvatarElement = form.querySelector('#avatar');
const formUploadElement = form.querySelector('#images');
const formRoomElement = form.querySelector('#room_number');
const formCapacityElement = form.querySelector('#capacity');
const errorMessage = form.querySelector('.error');
const messageButton = form.querySelector('.error__button');
const formTimeIn = form.querySelector('#timein');
const formTimeOut = form.querySelector('#timeout');


setHandlerPic(formAvatarElement, setAvatarPic);
setHandlerPic(formUploadElement, setBackgroundPic);

const setAdressOnMap = (addressX, addressY) => {
  formAddressElement.value = `${addressX}, ${addressY}`;
}

formAddressElement.readOnly = true;

const setDefaultAdress = () => {
  formAddressElement.value = `${DEFAULT_ADRESS.lng}, ${DEFAULT_ADRESS.lat}`;
}

const validateForm = () => {

  const adPlaceholderText = {
    flat: 1000,
    palace: 10000,
    bungalow: 0,
    house: 5000,
  };

  formPriceElement.max = '1000000';
  formPriceElement.type = 'number';

  formTypeElement.addEventListener('change', (evt) => {
    const value = adPlaceholderText[evt.target.value];

    formPriceElement.placeholder = value;
    formPriceElement.min = value;
  });

  formTimeIn.addEventListener('change', (evt) => {
    const timeIn = evt.target.value;
    formTimeOut.value = timeIn;
  });

  formTimeOut.addEventListener('change', (evt) => {
    const timeOut = evt.target.value;
    formTimeIn.value = timeOut;
  });
};

formRoomElement.addEventListener('change', (evt) => {
  const rooms = evt.target.value;

  switch (rooms) {
    case '2':
      formCapacityElement[0].disabled = true;
      formCapacityElement[1].disabled = false;
      formCapacityElement[2].disabled = false;
      formCapacityElement[3].disabled = true;

      formCapacityElement[2].selected = true;
      break;
    case '3':
      formCapacityElement[0].disabled = false;
      formCapacityElement[1].disabled = false;
      formCapacityElement[2].disabled = false;
      formCapacityElement[3].disabled = true;

      formCapacityElement[2].selected = true;
      break;
    case '100':
      formCapacityElement[0].disabled = true;
      formCapacityElement[1].disabled = true;
      formCapacityElement[2].disabled = true;
      formCapacityElement[3].disabled = false;

      formCapacityElement[3].selected = true;
      break;
    case '1':
      formCapacityElement[0].disabled = true;
      formCapacityElement[1].disabled = true;
      formCapacityElement[2].disabled = false;
      formCapacityElement[3].disabled = true;

      formCapacityElement[2].selected = true;
      break;
  }
});


const onSuccessSubmitForm = () => {
  showSuccessMessage();
  form.reset();
  setDefaultAdress();
};

const onErrorSubmitForm = () => {
  showErrorMessage();
  messageButton.addEventListener('click', () => {
    errorMessage.remove();
  });
};

formTitleElement.addEventListener('invalid', (evt) => {
  evt.target.style.border = '1px solid red';
});

formTitleElement.addEventListener('input', (evt) => {
  evt.target.style.border = '';
});

formPriceElement.addEventListener('invalid', (evt) => {
  evt.target.style.border = '1px solid red';
});

formPriceElement.addEventListener('input', (evt) => {
  evt.target.style.border = '';
});

const resetForm = (ads) => {
  formCleanButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    form.reset();
    setDefaultAdress();
    resetMapForm(ads);
    resetMainPin();
    resetAvatarPic();
    resetBackgroundPic();
  });
};

const setFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    createAd(formData, onSuccessSubmitForm, onErrorSubmitForm);
    setDefaultAdress();
    resetMainPin();
    resetAvatarPic();
    resetBackgroundPic();
  });
};


export { validateForm, setAdressOnMap, resetForm, setFormSubmit };
