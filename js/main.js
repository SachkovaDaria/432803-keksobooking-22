/**
 *  функция из
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if ( max > min && min >= 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('В функцию getRandomIntInclusive переданы некорректные параметры');
}


function getRandomArbitrary(min, max, fixed) {
  if ( max > min && min >= 0){
    return ((Math.random() * (max - min + 1)) + min).toFixed(fixed);
  }
  throw new Error('В функцию getRandomArbitrary переданы некорректные параметры');
}

getRandomArbitrary (1,20,5);
getRandomIntInclusive (1,20);
