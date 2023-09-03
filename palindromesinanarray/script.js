// anonymous function
var inputArray = ["racecar", "apple", "level", "hello", "deified"];
var palindromes = [];

(function() {
  var i = 0;
  
  while (i < inputArray.length) {
    var word = inputArray[i];
    var isPalindrome = true;

    for (var j = 0; j < Math.floor(word.length / 2); j++) {
      if (word[j] !== word[word.length - 1 - j]) {
        isPalindrome = false;
        break;
      }
    }

    if (isPalindrome) {
      palindromes.push(word);
    }

    i++;
  }

  console.log(palindromes);
})();

 

