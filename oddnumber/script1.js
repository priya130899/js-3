// IIFE function
var numbers = [10,11,12,13,14,15,16,17,18,19];

(function printOddNumbers(arr, index = 0) {
  if (index >= arr.length) {
    return;
  }
  
  if (arr[index] % 2 !== 0) {
    console.log(arr[index]);
  }

  printOddNumbers(arr, index + 1);
})(numbers);