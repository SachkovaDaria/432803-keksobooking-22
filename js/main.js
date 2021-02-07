/**
 *  функция из
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if ( max > min && min >= 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('В функцию getRandomIntInclusive переданы некорректные параметры');
}

function getRandomArbitrary(min, max, fixed) {
  if ( max > min && min >= 0){
    return ((Math.random() * (max - min)) + min).toFixed(fixed);
  }
  throw new Error('В функцию getRandomArbitrary переданы некорректные параметры');
}

function getRandomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const temp = array[random];
    array[random] = array[i];
    array[i] = temp;
  }
  return array.slice(0,getRandomIntInclusive(1, array.length-1));
}

const TITLE = [
  'Уютное гнездышко для вас',
  'Жилье для семьи',
  'Лучшая хата',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'хорошо',
  'мило',
  'для вас',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const NEAR_ADS_COUNT = 10;

const getAuthor = () => {
  return {
    avatar: 'img/avatars/user0'+ getRandomIntInclusive(1,8) +'.png',
  };
};

const getLocation = () => {
  return {
    x: getRandomArbitrary(35.65000, 35.70000, 5),
    y: getRandomArbitrary(139.70000, 139.80000, 5),
  };
};

const getOffer = (coordinates) => {
  return {
    title: TITLE[getRandomIntInclusive(0, TITLE.length - 1)],
    address: coordinates.x + ', ' + coordinates.y,
    price: getRandomIntInclusive(1,10000),
    type: TYPE[getRandomIntInclusive(0, TYPE.length - 1)],
    rooms: getRandomIntInclusive(1,7),
    guests: getRandomIntInclusive(1,15),
    checkin: CHECKIN[getRandomIntInclusive(0, CHECKIN.length - 1)],
    checkout: CHECKOUT[getRandomIntInclusive(0, CHECKOUT.length - 1)],
    features: getRandomArray(FEATURES),
    description: DESCRIPTION[getRandomIntInclusive(0, DESCRIPTION.length - 1)],
    photos: getRandomArray(PHOTOS),
  };
};

const getAd = () => {
  const location = getLocation();
  return {
    author: getAuthor(),
    location: location,
    offer: getOffer(location),
  };
};

const getNearbyAds = new Array(NEAR_ADS_COUNT).fill(null).map(() => getAd());
console.log(getNearbyAds);
