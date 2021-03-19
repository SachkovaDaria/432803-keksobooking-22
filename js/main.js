import {disableMap, initMap, addMarkersToMap} from './map.js';
import {validateForm} from './form.js';
import {showErrorMessage} from './utils.js';
import {getAds} from './api.js';

// const ADS_RENDER_COUNT = 10;

let ads =[];

const onSuccessAdsLoad = (adsFromAPI) => {
  ads = adsFromAPI;
  addMarkersToMap(ads);
};

const onErrorAdsLoad = (error) => {
  showErrorMessage(error.message);
};

disableMap();

initMap();

getAds(onSuccessAdsLoad, onErrorAdsLoad)

validateForm();




