// anonymous function
var numbers = [1, 2, 3, 4, 5];

var sum = function(arr, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  return arr[index] + sum(arr, index + 1);
};

var result = sum(numbers);

console.log(result); 

