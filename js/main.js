import { disableMap, initMap, addMarkersToMap } from './map.js';
import { validateForm, resetForm, setFormSubmit } from './form.js';
import { showErrorMessage } from './utils.js';
import { getAds } from './api.js';
import { initFilterForm } from './filter.js';


let ads = [];

const onSuccessAdsLoad = (adsFromAPI) => {
  ads = adsFromAPI;
  addMarkersToMap(ads);
  initFilterForm(ads);
  resetForm(ads);
};

const onErrorAdsLoad = (error) => {
  showErrorMessage(error.message);
};

disableMap();
initMap();
setFormSubmit();
getAds(onSuccessAdsLoad, onErrorAdsLoad);
validateForm();
