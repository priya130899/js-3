// Arrow function
var stringArray = ["hello world", "guvi geek"];

var titleCase = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

var result1Array = stringArray.map(titleCase);

console.log(result1Array);
