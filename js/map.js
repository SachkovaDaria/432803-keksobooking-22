/* global L:readonly */
import {DEFAULT_ADRESS} from './utils.js';
import {createCardElement} from './card.js';
import {setAdressOnMap} from './form.js';

const formElement = document.querySelector('.ad-form');
const fieldsetElements = formElement.querySelectorAll('fieldset');
const filterElement = document.querySelector('.map__filters');
const filterElements = filterElement.querySelectorAll('.map__filter');

// неактивное состояние карты
const disableMap = () => {
  formElement.classList.add('ad-form--disabled');
  fieldsetElements.forEach((fieldset)=> {
    fieldset.disabled = true;
  });
  filterElement.classList.add('map__filters--disabled');
  filterElements.forEach((filter)=> {
    filter.disabled = true;
  });
}

//добавляет main метку
const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mapMarkerMain = L.marker(
  {
    lat: 35.68940,
    lng: 139.69200,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

//активное состояние карты
const map = L.map('map-canvas')
const initMap = () => {
  map.addEventListener('load', () => {
    formElement.classList.remove('ad-form--disabled');
    fieldsetElements.forEach((fieldset)=> {
      fieldset.disabled = false;
    });
    filterElement.classList.remove('map__filters--disabled');
    filterElements.forEach((filter)=> {
      filter.disabled = false;
    });
  })
    .setView({
      lat: 35.68940,
      lng: 139.69200,
    }, 10);

  const mapTile = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  );

  mapTile.addTo(map);

  mapMarkerMain.addTo(map);
  const x = mapMarkerMain.getLatLng().lat.toFixed(5);
  const y = mapMarkerMain.getLatLng().lng.toFixed(5);
  setAdressOnMap(x,y);
  mapMarkerMain.addEventListener('moveend', (evt) => {
    const addressX = evt.target.getLatLng().lat.toFixed(5);
    const addressY = evt.target.getLatLng().lng.toFixed(5);
    setAdressOnMap(addressX,addressY)
  });
}
//обычная метка
const markerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
//добавляет обычные метки на карту
const addMarkersToMap = (ads) => {
  ads.forEach((ad) => {

    const lat = ad.location.lat;
    const lng = ad.location.lng;

    const marker = L.marker({
      lat,
      lng,
    }, {
      icon: markerIcon,
    },
    );
    marker
      .addTo(map)
      .bindPopup(
        createCardElement(ad),
      );
  });
}


const resetMainPin = () => {
  const defaultLatLng =new L.LatLng(DEFAULT_ADRESS.lat, DEFAULT_ADRESS.lng);
  mapMarkerMain.setLatLng(defaultLatLng);
}

export {disableMap, initMap, addMarkersToMap, resetMainPin};
