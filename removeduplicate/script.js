// anonymous function
var inputArray = [1, 2, 2, 3, 4, 4, 5];

var uniqueArray = (function() {
  return inputArray.reduce(function(acc, currentValue) {
    if (!acc.includes(currentValue)) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
})();

console.log(uniqueArray);
