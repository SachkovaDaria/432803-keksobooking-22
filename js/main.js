import {createAds} from './utils.js';
import {createCardElements, mapElement} from './card.js';

const ads = createAds();
const cardElements = createCardElements(ads);

mapElement.appendChild(cardElements[0]);
