// Arrow function
const newArray = [1, 2, 3, 5, 6, 7, 8, 11, 13, 15, 17, 19];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);


