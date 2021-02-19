const mapElement = document.querySelector('.map__canvas');
const cardPopupTemplate = document.querySelector('#card').content.querySelector('.popup');

const createCardElements = (ads) => {

  const adTypeText = {
    flat: 'Квартира',
    palace: 'Дворец',
    bungalow: 'Бунгало',
    house: 'Дом',
  };

  const cardElements = [];
  ads.forEach( function(ad) {
    const adElement = cardPopupTemplate.cloneNode(true);

    //заголовок в объявлении
    const adElementTitle = adElement.querySelector('.popup__title');
    if (!ad.offer.title) {
      adElementTitle.remove();
    } else {
      adElementTitle.textContent = ad.offer.title;
    }

    //адрес в объявлении
    const adElementAddress = adElement.querySelector('.popup__text--address');
    if (!ad.offer.address) {
      adElementAddress.remove();
    } else {
      adElementAddress.textContent = ad.offer.address;
    }

    //цена в объявлении
    const adElementPrice = adElement.querySelector('.popup__text--price');

    if (!ad.offer.price) {
      adElementPrice.remove();
    } else {
      adElementPrice.textContent = `${ad.offer.price} ₽/ночь`;
    }

    //тип жилья в объявлении
    const adElementType = adElement.querySelector('.popup__type');
    if (!ad.offer.type) {
      adElementType.remove();
    } else {
      adElementType.textContent = adTypeText[ad.offer.type];
    }

    //кол-во гостей и комнат в объявлении
    const adElementCapacity = adElement.querySelector('.popup__text--capacity');
    if (!ad.offer.rooms && !ad.offer.guests) {
      adElementCapacity.remove();
    } else {
      adElementCapacity.textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
    }

    //время в объявлении
    const adElementTime = adElement.querySelector('.popup__text--time');
    if (!ad.offer.checkin & !ad.offer.checkout) {
      adElementTime.remove();
    } else {
      adElementTime.textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
    }

    //удобства в объявлении
    const adElementFeatures = adElement.querySelector('.popup__features');
    const adFeatureItems = adElement.querySelectorAll('.popup__feature');

    for (const item of adFeatureItems) {
      item.parentNode.removeChild(item);
    }

    ad.offer.features.forEach((feature)=>{
      if (ad.offer.features.length === 0) {
        adElementFeatures.remove();
      } else {
        const li = document.createElement('li');
        li.classList.add('popup__feature');
        li.classList.add(`popup__feature--${feature}`);
        adElementFeatures.appendChild(li);
      }
    });

    //описание в объявлении
    const adElementDescription = adElement.querySelector('.popup__description')

    if (!ad.offer.description) {
      adElementDescription.remove();
    } else {
      adElementDescription.textContent = ad.offer.description;
    }

    // фото в объявлении
    const adElementImages = adElement.querySelector('.popup__photos');
    const adElementImg = adElement.querySelectorAll('.popup__photo');

    for (const item of adElementImg) {
      item.parentNode.removeChild(item);
    }

    ad.offer.photos.forEach((photo)=>{
      if (ad.offer.photos === 0) {
        adElementImages.remove();
      } else{
        const newImg = document.createElement('img');
        newImg.classList.add('popup__photo');
        newImg.src = photo;
        newImg.alt= ('Фотография жилья');
        newImg.height = 40;
        newImg.width = 45;
        adElementImages.appendChild(newImg);
      }
    });

    //аватар в объявлении
    const adElementAvatar =adElement.querySelector('.popup__avatar');
    if (!ad.author.avatar) {
      adElementAvatar.remove();
    } else {
      adElementAvatar.src = ad.author.avatar;
    }

    cardElements.push(adElement);
  });
  return cardElements;
};

export {createCardElements, mapElement};
