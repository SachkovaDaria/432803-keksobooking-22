const ADS_RENDER_COUNT = 10;

const mapFilters = document.querySelector('.map__filters');

const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const featuresFilter = document.querySelector('#housing-features');

const featuresFilterWifi = featuresFilter.querySelector('#filter-wifi');
const featuresFilterDishwasher = featuresFilter.querySelector('#filter-dishwasher');
const featuresFilterParking = featuresFilter.querySelector('#filter-parking');
const featuresFilterWasher = featuresFilter.querySelector('#filter-washer');
const featuresFilterElevator = featuresFilter.querySelector('#filter-elevator');
const featuresFilterConditioner = featuresFilter.querySelector('#filter-conditioner');

const checkfeatures = (ad) => {
  return featuresFilter.elements.checked == false
  ||featuresFilterWifi.checked == true && ad.offer.features.includes('wifi') == true
  || featuresFilterDishwasher.checked == true && ad.offer.features.includes('dishwasher') == true
  || featuresFilterParking.checked == true && ad.offer.features.includes('parking') == true
  || featuresFilterWasher.checked == true && ad.offer.features.includes('washer') == true
  || featuresFilterElevator.checked == true && ad.offer.features.includes('elevator') == true
  || featuresFilterConditioner.checked == true && ad.offer.features.includes('conditioner') == true
}

const checkType = (ad) => {
  return typeFilter.value === 'any' || ad.offer.type === typeFilter.value;
};

const checkPrice = (ad) => {
  return priceFilter.value === 'any'
  || (priceFilter.value === 'low' && ad.offer.price < 10000)
  ||(priceFilter.value === 'high' && ad.offer.price > 50000)
  ||(priceFilter.value === 'middle' && ad.offer.price >= 10000 && ad.offer.price <= 50000);
};

const checkRooms = (ad) => {
  return roomsFilter.value === 'any'
  || (roomsFilter.value === '1' && ad.offer.rooms == 1)
  || (roomsFilter.value === '2' && ad.offer.rooms == 2)
  || (roomsFilter.value === '3' && ad.offer.rooms == 3)
};

const checkGuests = (ad) => {
  return guestsFilter.value === 'any'
  || (guestsFilter.value === '1' && ad.offer.guests == 1)
  || (guestsFilter.value === '2' && ad.offer.guests == 2)
  || (guestsFilter.value === '0' && ad.offer.guests == 0)
};
const initFilterForm = (ads) => {

  mapFilters.addEventListener('change', () => {


    const filterAds = [];

    for (let i = 0; i < ads.length && i <= ADS_RENDER_COUNT; i++){
      if (!checkType(ads[i])){
        continue;
      }
      if (!checkPrice(ads[i])){
        continue;
      }
      if (!checkRooms(ads[i])){
        continue;
      }
      if (!checkGuests(ads[i])){
        continue;
      }

      // if (!checkfeatures(ads[i])){
      //   continue;
      // }

      filterAds.push(ads[i]);
    }
    console.log(filterAds);
  });
};


export {initFilterForm}
