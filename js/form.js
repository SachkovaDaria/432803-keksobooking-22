const form = document.querySelector('.ad-form');
const formPriceElement = form.querySelector('#price');
const formTypeElement = form.querySelector('#type');
const formCleanButton = form.querySelector('.ad-form__reset');
const mainElement = document.querySelector('main');
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
}

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

const showSuccessMessageForm = () => {
  const templateFragment = document.querySelector('#success').content.querySelector('.success')
  const messageElementSuccess = templateFragment.cloneNode(true);
  mainElement.appendChild(messageElementSuccess);

  const onEscKeydown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      messageElementSuccess.remove();
    }
  }
  document.addEventListener('keydown',onEscKeydown);
  messageElementSuccess.addEventListener('click', () => {
    messageElementSuccess.remove();
    document.removeEventListener('keydown',onEscKeydown);
  });
};

const showErrorMessageForm = () => {
  const templateFragment = document.querySelector('#error').content.querySelector('.error');
  const messageElementError = templateFragment.cloneNode(true);
  const messageButton = messageElementError.querySelector('.error__button');

  mainElement.appendChild(messageElementError);

  const onEscKeydown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      messageElementError.remove();
    }
  }
  document.addEventListener('keydown',onEscKeydown);


  messageButton.addEventListener('click', () => {
    messageElementError.remove();
    document.removeEventListener('keydown',onEscKeydown);
  });
  messageElementError.addEventListener('click', () => {
    messageElementError.remove();
    document.removeEventListener('keydown',onEscKeydown);
  });
};

const address = document.querySelector('#address');
address.readOnly = true;

const setAdressOnMap = (addressX,addressY) => {
  address.value =`${addressX}, ${addressY}`;
}

formCleanButton.addEventListener('click',()=>{
  form.reset();
  setAdressOnMap('35.68940','139.69200');
});


export {validateForm, setAdressOnMap, showSuccessMessageForm, showErrorMessageForm};
