import {createAds} from './utils.js';
import {disableMap, initMap, addMarkersToMap} from './map.js';
import {customizeForm} from './form.js';
import {createCardElements} from './card.js';

const SIMILAR_AD_COUNT = 10;

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((ads) => {
    createCardElements(ads.slice(0, SIMILAR_AD_COUNT));
  })
  .catch((err) => {
    err;
  });


const ads = createAds();

disableMap();
initMap();
addMarkersToMap(ads);
customizeForm();
