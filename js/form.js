import {DEFAULT_ADRESS} from './utils.js';
import {createAd} from './api.js';
import {showErrorMessage, showSuccessMessage} from './utils.js';
import {addMarkersToMap, resetMainPin, removeMarkersFromMap} from './map.js';
import {checkAvatar, checkPictureAd} from './check-picture.js';


const form = document.querySelector('.ad-form');
const formPriceElement = form.querySelector('#price');
const formTypeElement = form.querySelector('#type');
const formCleanButton = form.querySelector('.ad-form__reset');
const mapFilters = document.querySelector('.map__filters');
const address = document.querySelector('#address');

address.readOnly = true;

const setAdressOnMap = (addressX,addressY) => {
  address.value =`${addressX}, ${addressY}`;
}

const setDefaultAdress = () => {
  address.value =`${DEFAULT_ADRESS.lat}, ${DEFAULT_ADRESS.lng}`;
}


const validateForm = () => {

  const adPlaceholderText = {
    flat: 1000,
    palace: 10000,
    bungalow: 0,
    house: 5000,
  };

  formTypeElement.addEventListener('change', (evt) => {
    const value = adPlaceholderText[evt.target.value];

    formPriceElement.placeholder = value;
    formPriceElement.min = value;
    formPriceElement.max = '1 000 000';
    formPriceElement.type= 'number';
  });

  const formTimeIn = form.querySelector('#timein');
  const formTimeOut = form.querySelector('#timeout');

  formTimeIn.addEventListener('change', (evt) => {
    const timeIn = evt.target.value;
    formTimeOut.value = timeIn;
  });

  formTimeOut.addEventListener('change', (evt) => {
    const timeOut = evt.target.value;
    formTimeIn.value = timeOut;
  });
};

const formRoomElement = form.querySelector('#room_number');
const formCapacityElement = form.querySelector('#capacity');

formRoomElement.addEventListener('change', (evt) => {
  const rooms = evt.target.value;

  switch (rooms) {
    case '2':
      formCapacityElement[0].disabled = true;
      formCapacityElement[1].disabled = false;
      formCapacityElement[2].disabled = false;
      formCapacityElement[3].disabled = true;
      break;
    case '3':
      formCapacityElement[0].disabled = false;
      formCapacityElement[1].disabled = false;
      formCapacityElement[2].disabled = false;
      formCapacityElement[3].disabled = true;
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

const formAvatarElement = document.querySelector('.ad-form__field input[type=file]');
const formAvatarPic = document.querySelector('.ad-form-header__preview img');

const formUploadElement = document.querySelector('.ad-form__upload input[type=file]');
const formUploadPic = document.querySelector('.ad-form__photo');

checkPictureAd(formUploadElement, formUploadPic);
checkAvatar(formAvatarElement, formAvatarPic);

const onSuccessSubmitForm = () => {
  showSuccessMessage();
  form.reset();
  setDefaultAdress();
};

const onErrorSubmitForm = () => {
  showErrorMessage();
  const errorMessage = document.querySelector('.error');
  const messageButton = document.querySelector('.error__button');

  messageButton.addEventListener('click', () => {
    errorMessage.remove();
  });
};

const resetForm = (ads) => {
  formCleanButton.addEventListener('click',() => {
    form.reset();
    mapFilters.reset();
    removeMarkersFromMap();
    addMarkersToMap(ads);
    setDefaultAdress();
    resetMainPin();
  });
};

const setFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    setDefaultAdress();
    resetMainPin();
    const formData = new FormData(evt.target);
    createAd(formData, onSuccessSubmitForm, onErrorSubmitForm);
  });
};

setFormSubmit();

export {validateForm, setAdressOnMap, resetForm};
