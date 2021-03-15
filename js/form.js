
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
  document.addEventListener('click', () => {
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
  document.addEventListener('click', () => {
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
