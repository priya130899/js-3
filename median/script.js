// anonymous function
var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];

var median = (function() {
  var merged = [];
  var totalLength = arr1.length * 2;
  var i = 0;
  var j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return (merged[Math.floor((totalLength - 1) / 2)] + merged[Math.floor(totalLength / 2)]) / 2;
})();

console.log(median);

 

