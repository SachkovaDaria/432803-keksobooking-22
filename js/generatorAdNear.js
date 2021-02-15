import {getNearbyAds} from './utils.js';


const similarListElement = document.querySelector('.map__canvas');

const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = getNearbyAds;

similarAds.forEach( function(ad) {
  const adElement = similarAdTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = ad.offer.price + ' ₽/ночь';


  let adType = adElement.querySelector('.popup__type')
  adType.textContent = 'Дворец';
  if (ad.offer.type === 'flat') {
    adType.textContent = 'Квартира';
  } else if (ad.offer.type === 'bungalow') {
    adType.textContent = 'Бунгало';
  } else {
    adType.textContent = 'Дом';
  }

  adElement.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests +' гостей';
  adElement.querySelector('.popup__text--time').textContent = 'Заезд после '+ ad.offer.checkin + ', выезд до ' + ad.offer.checkout;

  const featuresList = adElement.querySelector('.popup__features');



  for (let i = featuresList.children.length - 1; i >= 0; i--) {
    const child = featuresList.children[i];
    child.parentElement.removeChild(child);
  }
  for (let i = 0; i < ad.offer.features.length; i++){
    const feature = ad.offer.features[i];

    const li = document.createElement('li');
    featuresList.appendChild(li).classList.add('popup__feature');
    const featuresItem = adElement.querySelectorAll('.popup__feature');
    featuresItem[i].classList.add('popup__feature--'+ feature);
  }

  adElement.querySelector('.popup__description').textContent = ad.offer.description;

  const imgContainer = adElement.querySelector('.popup__photos');
  for (let i = 0; i < ad.offer.photos.length; i++) {
    const imgSrc = ad.offer.photos[i];
    if (i > 0){
      const img = document.createElement('img');
      imgContainer.appendChild(img).classList.add('popup__photo');
    }
    const imgItem = adElement.querySelectorAll('.popup__photo');
    imgItem[i].alt= ('Фотография жилья');
    imgItem[i].height = 40;
    imgItem[i].width = 45;
    imgItem[i].src = imgSrc;
  }

  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  similarListElement.appendChild(adElement);
});

