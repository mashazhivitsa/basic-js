const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let newArray = [];
  let joinedArray = newArray.concat(...matrix);
  let cats = 0;

  for (i = 0; i < joinedArray.length; i++) {
    if (joinedArray[i] === '^^') {
      cats += 1;
    } 
  }
  return cats;
};
