// IIFE Function
var isPrime = function (num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

var array = [1, 2, 3, 5, 6, 7, 8, 11, 13, 15, 17, 19];

var primeNumbers = (function () {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
})();

console.log(primeNumbers);


