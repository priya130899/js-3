// Arrow function
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.map((number) => {
  if (number % 2 !== 0) {
    console.log(number);
  }
});