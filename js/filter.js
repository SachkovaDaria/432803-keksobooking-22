/* global _:readonly */

import { addMarkersToMap, removeMarkersFromMap } from './map.js';

const ADS_RENDER_COUNT = 10;

const mapFilters = document.querySelector('.map__filters');

const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const featuresFilter = mapFilters.querySelector('#housing-features');


const checkFeatures = (ad, cheakedFeaturesElement) => {
  return cheakedFeaturesElement.every((featureElement) => {
    return ad.offer.features.includes(featureElement.value);
  });
}

const checkType = (ad) => {
  return typeFilter.value === 'any' || ad.offer.type === typeFilter.value;
};

const checkPrice = (ad) => {
  return priceFilter.value === 'any'
    || (priceFilter.value === 'low' && ad.offer.price < 10000)
    || (priceFilter.value === 'high' && ad.offer.price > 50000)
    || (priceFilter.value === 'middle' && ad.offer.price >= 10000 && ad.offer.price <= 50000);
};

const checkRooms = (ad) => {
  return roomsFilter.value === 'any'
    || (roomsFilter.value === '1' && ad.offer.rooms === 1)
    || (roomsFilter.value === '2' && ad.offer.rooms === 2)
    || (roomsFilter.value === '3' && ad.offer.rooms === 3)
};

const checkGuests = (ad) => {
  return guestsFilter.value === 'any'
    || (guestsFilter.value === '1' && ad.offer.guests === 1)
    || (guestsFilter.value === '2' && ad.offer.guests === 2)
    || (guestsFilter.value === '0' && ad.offer.guests === 0)
};

const RERENDER_DELAY = 500;



const initFilterForm = (ads) => {
  mapFilters.addEventListener('change', () => {
    const filterAds = [];
    removeMarkersFromMap();

    const cheakedFeaturesElement = featuresFilter.querySelectorAll('.map__checkbox:checked');


    for (let i = 0; i < ads.length && i <= ADS_RENDER_COUNT; i++) {
      if (!checkType(ads[i])) {
        continue;
      }
      if (!checkPrice(ads[i])) {
        continue;
      }
      if (!checkRooms(ads[i])) {
        continue;
      }
      if (!checkGuests(ads[i])) {
        continue;
      }

      if (!checkFeatures(ads[i], Array.from(cheakedFeaturesElement))) {
        continue;
      }

      filterAds.push(ads[i]);
    }

    removeMarkersFromMap();
    debounced(filterAds);
  });
};

const debounced = _.debounce((ads) => addMarkersToMap(ads), RERENDER_DELAY);

export { initFilterForm }
