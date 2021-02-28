import {createAds} from './utils.js';
// import {createCardElement} from './card.js';
import {getInactiveMap, initMap, addMarkersToMap} from './map.js';
import {сustomizeForm} from './form.js';

const ads = createAds();

getInactiveMap();
initMap();
addMarkersToMap(ads);
сustomizeForm();
