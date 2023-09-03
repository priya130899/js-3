// IIFE Function
(function() {
  var inputArray = ["racecar", "apple", "level", "hello", "deified"];
  var palindromes = [];

  var i = 0;
  while (i < inputArray.length) {
    var word = inputArray[i];
    var isPalindrome = true;
    var length = word.length;
    
    var j = 0;
    while (j < Math.floor(length / 2)) {
      if (word[j] !== word[length - 1 - j]) {
        isPalindrome = false;
        break;
      }
      j++;
    }

    if (isPalindrome) {
      palindromes.push(word);
    }

    i++;
  }

  console.log(palindromes);
})();


