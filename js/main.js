import {createAbs} from './utils.js';
import {createCardElements, mapInsert} from './card.js';

const ads = createAbs();

const cardElements = createCardElements(ads);
mapInsert.appendChild(cardElements[0]);
