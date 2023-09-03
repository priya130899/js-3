// IIFE Function
(function() {
  var inputArray = [1, 2, 2, 3, 4, 4, 5];
  var uniqueArray = [];

  for (var i = 0; i < inputArray.length; i++) {
    var currentElement = inputArray[i];

    // Check if the current element is not already in the uniqueArray
    var isDuplicate = false;
    for (var j = 0; j < uniqueArray.length; j++) {
      if (uniqueArray[j] === currentElement) {
        isDuplicate = true;
        break;
      }
    }

    // If it's not a duplicate, add it to the uniqueArray
    if (!isDuplicate) {
      uniqueArray.push(currentElement);
    }
  }

  console.log(uniqueArray);
})();




