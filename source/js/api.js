const getAds = (onSuceess, onError) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')

    .then(response => {
      if (!response.ok) {
        throw new Error('Упс... ошибка. Уже разбираемся, что стряслось.');
      }

      return response.json();
    })
    .then((ads) => {
      onSuceess(ads);
    })
    .catch((error) => {
      onError(error);
    })
};


const createAd = (adFormData, onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: adFormData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      onSuccess();
    })
    .catch(() => {
      onError()
    });
};

export { getAds, createAd };
