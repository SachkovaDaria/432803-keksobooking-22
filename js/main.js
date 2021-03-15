import {disableMap, initMap, addMarkersToMap} from './map.js';
import {validateForm} from './form.js';
import {createCardElements} from './card.js';
import {addAdstoMap, setUserFormSubmit} from './api.js';

disableMap();
initMap();
addAdstoMap(createCardElements,addMarkersToMap);
validateForm();

setUserFormSubmit();
