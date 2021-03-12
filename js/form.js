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

//показывает сообщение при успешной отправке - только один раз
const showSuccessMessage = () => {
  const templateFragment = document.querySelector('#success').content;
  const message = templateFragment.cloneNode(true);
  mainElement.appendChild(message);

  const fragment = document.querySelector('.success');
  fragment.classList.remove('hidden');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      fragment.classList.add('hidden');
    }
  });
  window.addEventListener('click', () => {
    fragment.classList.add('hidden');
  });
};

const showErrorMessage = () => {
  const templateFragment = document.querySelector('#error').content;
  const message = templateFragment.cloneNode(true);
  mainElement.appendChild(message);

  const fragment = document.querySelector('.error');
  const messageButton =fragment.querySelector('.error__button');
  fragment.classList.remove('hidden');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      fragment.classList.add('hidden');
    }
  });
  messageButton.addEventListener('click', () => {
    fragment.classList.add('hidden');
  });
  window.addEventListener('click', () => {
    fragment.classList.add('hidden');
  });
};

//отчищает форму по "очистить" - координаты?
formCleanButton.addEventListener('click',()=>{
  form.reset()
});

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch ('https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          form.reset()
          showSuccessMessage();
        }
      })
      .catch(() => {
        showErrorMessage();
      });
  });
};

export {validateForm, setUserFormSubmit};
