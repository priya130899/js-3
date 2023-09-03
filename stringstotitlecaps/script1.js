// IIFE Function
var stringArray = ["hello world", "fullstack", "title case example"];

(function convertToTitleCase(arr) {
  let result = [];
  
  (function recurse(index) {
    if (index < arr.length) {
      const words = arr[index].split(" ");
      const titleCased = words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      result.push(titleCased);
      recurse(index + 1);
    }
  })(0);

  console.log(result);
})(stringArray);
