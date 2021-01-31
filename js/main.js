// функция из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if ( max>min && min>=0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  alert('ошибка');
}


function getRandomArbitrary(min, max) {
  if ( max>min && min>=0) {
    return Math.random() * (max - min) + min;
  }
  alert('ошибка');
}

getRandomInt (-20,100);
getRandomArbitrary (102,100);
getRandomInt (1,100);
getRandomArbitrary (1,100);
