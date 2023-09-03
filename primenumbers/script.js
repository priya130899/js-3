// anonymous function
var isPrime = function (num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

var array = [1, 2, 3, 5, 6, 7, 8, 11, 13, 14, 17, 19];

var primeNumbers = array.map(function (element) {
  if (isPrime(element)) return element;
  return null; // Returning null for non-prime numbers
}).filter(function (element) {
  return element !== null;
});

console.log(primeNumbers);
 

