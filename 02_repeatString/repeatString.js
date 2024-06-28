const repeatString = function (text, num) {
  repeat = "";

  if (num < 0) {
    return "ERROR";
  } else {
    for (i = 0; i < num; i++) {
      repeat += text;
    }
    return repeat;
  }
};
console.log(repeatString("hello", 0));
// Do not edit below this line
module.exports = repeatString;
