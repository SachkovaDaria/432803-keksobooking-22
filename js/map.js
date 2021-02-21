/* global L:readonly */

// неактивное состояние карты
const formElement = document.querySelector('.ad-form');
const fieldsetElements = formElement.querySelectorAll('fieldset');
formElement.classList.add('ad-form--disabled');
fieldsetElements.forEach((fieldset)=> {
  fieldset.setAttribute('disabled', 'disabled');
});
const filterElement = document.querySelector('.map__filters');
const filterElements = filterElement.querySelectorAll('.map__filter');
filterElement.classList.add('map__filters--disabled');
filterElements.forEach((filter)=> {
  filter.setAttribute('disabled', 'disabled');
});

//слушатель события load «инициализация карты»
const map = L.map('map-canvas')
  .on('load', () => {
    formElement.classList.remove('ad-form--disabled');
    fieldsetElements.forEach((fieldset)=> {
      fieldset.removeAttribute('disabled', 'disabled');
    });
    filterElement.classList.remove('map__filters--disabled');
    filterElements.forEach((filter)=> {
      filter.removeAttribute('disabled', 'disabled');
    });
  })
  .setView({
    lat: 35.6894,
    lng: 139.692,
  }, 10);

const mapTileElement = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
);


//добавляет main метку
const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mapMarkerMainElelment = L.marker(
  {
    lat: 35.6894,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

const address = document.querySelector('#address');
address.setAttribute('readonly', 'readonly');
address.value = `${mapMarkerMainElelment.getLatLng().lat.toFixed(5)}, ${mapMarkerMainElelment.getLatLng().lng.toFixed(5)}`;
mapMarkerMainElelment.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});


//добавляет обычную метку
const markerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});



export {map , mapTileElement, markerIcon, mapMarkerMainElelment};
