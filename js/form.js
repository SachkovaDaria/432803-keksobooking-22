const сustomizeForm = () => {
  const form = document.querySelector('.ad-form');
  const formPriceElement = form.querySelector('#price');
  const formTypeElement = form.querySelector('#type');


  const adPlaceholderText = {
    flat: '1000',
    palace: '10000',
    bungalow: '0',
    house: '5000',
  };

  formTypeElement.addEventListener('change', (evt) => {
    const value = adPlaceholderText[evt.target.value];
    const valueInNumber = Number(value);

    formPriceElement.placeholder = value
    formPriceElement.min = valueInNumber;
  });

  const formTimeIn = form.querySelector('#timein');
  const formTimeOut = form.querySelector('#timeout');

  formTimeIn.addEventListener('change', (evt) => {
    const timeIn = evt.target.value;
    formTimeOut.value = timeIn;
  });

}

export {сustomizeForm};
