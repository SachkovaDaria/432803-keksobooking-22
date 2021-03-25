//const mapElement = document.querySelector('.map__canvas');

const adTypeText = {
  flat: 'Квартира',
  palace: 'Дворец',
  bungalow: 'Бунгало',
  house: 'Дом',
};

//получаю одно объявление
const createCardElement = (ad) => {
  const cardPopupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const adElement = cardPopupTemplate.cloneNode(true);

  //заголовок в объявлении
  const adTitleElement = adElement.querySelector('.popup__title');
  if (!ad.offer.title) {
    adTitleElement.remove();
  } else {
    adTitleElement.textContent = ad.offer.title;
  }

  //адрес в объявлении
  const adAddressElement = adElement.querySelector('.popup__text--address');
  if (!ad.offer.address) {
    adAddressElement.remove();
  } else {
    adAddressElement.textContent = ad.offer.address;
  }

  //цена в объявлении
  const adPriceElement = adElement.querySelector('.popup__text--price');

  if (!ad.offer.price) {
    adPriceElement.remove();
  } else {
    adPriceElement.textContent = `${ad.offer.price} ₽/ночь`;
  }

  //тип жилья в объявлении
  const adTypeElement = adElement.querySelector('.popup__type');
  if (!ad.offer.type) {
    adTypeElement.remove();
  } else {
    adTypeElement.textContent = adTypeText[ad.offer.type];
  }

  //кол-во гостей и комнат в объявлении
  const adCapacityElement = adElement.querySelector('.popup__text--capacity');
  if (!ad.offer.rooms && !ad.offer.guests) {
    adCapacityElement.remove();
  } else {
    adCapacityElement.textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  }

  //время в объявлении
  const adTimeElement = adElement.querySelector('.popup__text--time');
  if (!ad.offer.checkin && !ad.offer.checkout) {
    adTimeElement.remove();
  } else {
    adTimeElement.textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  }

  //удобства в объявлении
  const adFeaturesElement = adElement.querySelector('.popup__features');
  const adFeatureItems = adElement.querySelectorAll('.popup__feature');

  if (ad.offer.features.length === 0) {
    adFeaturesElement.remove();
  } else {
    adFeatureItems.forEach((featureElement) => {
      featureElement.remove();
    });
    ad.offer.features.forEach((feature) => {
      const li = document.createElement('li');
      li.classList.add('popup__feature');
      li.classList.add(`popup__feature--${feature}`);
      adFeaturesElement.appendChild(li);
    });
  }

  //описание в объявлении
  const adDescriptionElement = adElement.querySelector('.popup__description')

  if (!ad.offer.description) {
    adDescriptionElement.remove();
  } else {
    adDescriptionElement.textContent = ad.offer.description;
  }

  // фото в объявлении
  const adImagesElement = adElement.querySelector('.popup__photos');
  const adImgElement = adElement.querySelectorAll('.popup__photo');

  if (ad.offer.photos === 0) {
    adImagesElement.remove();
  } else {
    adImgElement.forEach((ImgElement) => {
      ImgElement.remove();
    });
    ad.offer.photos.forEach((photo) => {
      const newImg = document.createElement('img');
      newImg.classList.add('popup__photo');
      newImg.src = photo;
      newImg.alt = ('Фотография жилья');
      newImg.height = 40;
      newImg.width = 45;
      adImagesElement.appendChild(newImg);
    });
  }

  //аватар в объявлении
  const adAvatarElement = adElement.querySelector('.popup__avatar');
  if (!ad.author.avatar) {
    adAvatarElement.remove();
  } else {
    adAvatarElement.src = ad.author.avatar;
  }
  return adElement;
};



export { createCardElement };
