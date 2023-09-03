// Arrow function
var inputArray = ["racecar", "apple", "level", "hello", "deified"];

var isPalindrome = (word) => {
  var length = word.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }
  return true;
};

var palindromes = inputArray.reduce((acc, word) => {
  if (isPalindrome(word)) {
    acc.push(word);
  }
  return acc;
}, []);

console.log(palindromes);



