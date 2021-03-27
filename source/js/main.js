import { disableMap, initMap, addMarkersToMap, getMapFiltersActive } from './map.js';
import { validateForm, resetForm, setFormSubmit } from './form.js';
import { showErrorMessage } from './utils.js';
import { getAds } from './api.js';
import { initFilterForm } from './filter.js';


let ads = [];

const onSuccessAdsLoad = (adsFromAPI) => {
  ads = adsFromAPI;
  addMarkersToMap(ads);
  getMapFiltersActive();
  initFilterForm(ads);
  resetForm(ads);
  setFormSubmit(ads);
};

const onErrorAdsLoad = (error) => {
  showErrorMessage(error.message);
};

disableMap();
initMap();
getAds(onSuccessAdsLoad, onErrorAdsLoad);
validateForm();
