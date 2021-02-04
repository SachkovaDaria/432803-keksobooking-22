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
    return ((Math.random() * (max - min + 1)) + min).toFixed(fixed);
  }
  throw new Error('В функцию getRandomArbitrary переданы некорректные параметры');
}

function getRandomArray(arr) {
  const newArray =[];

  for ( let i = 0; i <= getRandomIntInclusive( 1, arr.length - 1); i++) {

    let item = arr[getRandomIntInclusive(0, arr.length - 1)];
    if (!newArray.includes(item)){
      newArray.push(item);
    }
  }
  return newArray;
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

const FEACTURES = [
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

const author = () => {
  return {
    avatar: 'img/avatars/user0'+ getRandomIntInclusive(1,8) +'.png',
  };
};

const locations = () => {
  return {
    x: getRandomArbitrary(35.65000, 35.70000, 5),
    y: getRandomArbitrary(139.70000, 139.80000, 5),
  };
};

const offer = () => {
  return {
    title: TITLE[getRandomIntInclusive(0, TITLE.length - 1)],
    address: locations(),
    type: TYPE[getRandomIntInclusive(0, TYPE.length - 1)],
    rooms: getRandomIntInclusive(1,7),
    guests: getRandomIntInclusive(1,15),
    checkin: CHECKIN[getRandomIntInclusive(0, CHECKIN.length - 1)],
    checkout: CHECKOUT[getRandomIntInclusive(0, CHECKOUT.length - 1)],
    features: getRandomArray(FEACTURES),
    description: DESCRIPTION[getRandomIntInclusive(0, DESCRIPTION.length - 1)],
    photos: getRandomArray(PHOTOS),
  };
};

const ad  = () => {
  return {
    author: author (),
    locations: locations(),
    offer: offer (),
  };
};

const getNearbyAds = new Array(NEAR_ADS_COUNT).fill(null).map(() => ad());

getNearbyAds();
