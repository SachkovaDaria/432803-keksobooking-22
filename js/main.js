/* global L:readonly */
import {createAds} from './utils.js';
import {createCardElements, mapElement} from './card.js';
import {map, mapTileElement, markerIcon, mapMarkerMainElelment} from './map.js';

const ads = createAds();
const cardElements = createCardElements(ads);

mapTileElement.addTo(map);

mapMarkerMainElelment.addTo(map);

ads.forEach((ad) => {
  const lat = ad.location.x;
  const lng = ad.location.y;
  const marker = L.marker({
    lat,
    lng,
  }, {
    icon: markerIcon,
  },
  );
  marker.addTo(map);
});
