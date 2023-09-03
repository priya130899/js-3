// IIFE Function
var numbers = [1, 2, 3, 4, 5];

var sum = (function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})(numbers);

console.log(sum); 

