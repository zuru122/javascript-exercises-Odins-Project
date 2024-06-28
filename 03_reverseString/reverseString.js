const reverseString = function (characters) {
  let new_character = "";
  length = characters.length;

  for (i = length - 1; i >= 0; i--) {
    new_character += characters[i];
  }

  return new_character;
};
console.log(reverseString("Hello World"));

// Do not edit below this line
module.exports = reverseString;
