import {createAds} from './utils.js';
// import {createCardElement} from './card.js';
import {getInactiveMap, initMap, addMarkersToMap} from './map.js';

const ads = createAds();
// const cardElements = createCardElements(ads);

getInactiveMap();
initMap();
addMarkersToMap(ads);
