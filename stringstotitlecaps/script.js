// anonymous function
var stringArray = ["hello world", "javascript is awesome", "title case example"];

function titleCase(str) {
  if (str === "") {
    return "";
  }

  const words = str.split(" ");
  const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  const rest = words.slice(1).join(" ");
  
  return firstWord + " " + titleCase(rest);
}

const resultArray = stringArray.map(titleCase);

console.log(resultArray);
