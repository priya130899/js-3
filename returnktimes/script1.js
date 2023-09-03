// IIFE Function
(function() {
  var inputArray = [1, 2, 3, 4, 5];
  var k = 2;
  
  var rotatedArray = inputArray.slice(); // Create a copy of the input array
  var n = inputArray.length;
  k = k % n; // Ensure k is within the range of array length
  
  while (k > 0) {
    var temp = rotatedArray.shift(); // Remove the first element
    rotatedArray.push(temp); // Push it to the end
    k--;
  }
  
  console.log(rotatedArray);
})();





