const housingTypeFilter = document.querySelector('#housing-type');
const priceTypeFilter = document.querySelector('#housing-price');
const roomsTypeFilter = document.querySelector('#housing-rooms');
const guestsTypeFilter = document.querySelector('#housing-guests');
const featuresTypeFilter = document.querySelector('#housing-features');


const filersMap = (filer, adsValue) => {
  filer.addEventListener('change', (evt) => {
    const filerChecked = evt.target.value;
    filerChecked === adsValue.value;
  });
}

filersMap(housingTypeFilter, ads.address);
