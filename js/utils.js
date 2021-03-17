const DEFAULT_ADRESS = {
  lat: 35.68940,
  lng: 139.69200,
};


const onEscKeydown = (handler, evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    handler();
  }
}

const closeMassage = (messageElement, onMessageEscKeyDown) => {
  document.removeEventListener('keydown', onMessageEscKeyDown);
  messageElement.remove();
}

const showErrorMessage = () => {
  const templateFragment = document.querySelector('#error').content.querySelector('.error');
  const messageElement = templateFragment.cloneNode(true);

  const onMessageEscKeyDown = onEscKeydown.bind(this, () =>{
    closeMassage(messageElement,onMessageEscKeyDown);
  })

  messageElement.addEventListener('click', () => {
    closeMassage(messageElement,onMessageEscKeyDown);
  })

  document.addEventListener('keydown', onMessageEscKeyDown);

  document.body.append(messageElement);
};

const showSuccessMessage = () => {
  const templateSuccessElement = document.querySelector('#success').content.querySelector('.success')
  const messageElement = templateSuccessElement.cloneNode(true);

  const onMessageEscKeyDown = onEscKeydown.bind(this, () =>{
    closeMassage(messageElement,onMessageEscKeyDown);
  })

  messageElement.addEventListener('click', () => {
    closeMassage(messageElement,onMessageEscKeyDown);
  })

  document.addEventListener('keydown', onMessageEscKeyDown);

  document.body.append(messageElement);
};


export {DEFAULT_ADRESS, showErrorMessage, showSuccessMessage}
