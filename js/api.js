const addAdstoMap = (listElements,addMarkers) => {
  const SIMILAR_AD_COUNT = 10;

  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      listElements(ads.slice(0, SIMILAR_AD_COUNT));
      addMarkers(ads);
    })
    .catch(() => {
      showErrorMessage('Упс... ошибка. Уже разбираемся, что стряслось.' );
    });
};

const ERROR_MESSAGE_SHOW_TIME = 5000;

const showErrorMessage = (message) => {

  const messageContainer = document.createElement('div');
  messageContainer.style.zIndex = 1000;
  messageContainer.style.color = '#ffffff';
  messageContainer.style.fontSize = '40px';
  messageContainer.classList.add('error');
  messageContainer.textContent = message;

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, ERROR_MESSAGE_SHOW_TIME);
}

export {addAdstoMap};
