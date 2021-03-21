import {disableMap, initMap, addMarkersToMap} from './map.js';
import {validateForm} from './form.js';
import {showErrorMessage} from './utils.js';
import {getAds} from './api.js';
import {initFilterForm} from './filter.js';


let ads =[];

const onSuccessAdsLoad = (adsFromAPI) => {
  ads = adsFromAPI;
  addMarkersToMap(ads);
  initFilterForm(ads);
  // console.log(ads);
  // console.log(ads[0].offer.features.includes('wifi'));
};

const onErrorAdsLoad = (error) => {
  showErrorMessage(error.message);
};

disableMap();

initMap();

getAds(onSuccessAdsLoad, onErrorAdsLoad)

validateForm();
