const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (Array.isArray(members) && members.length !== 0) {

    // let sorted = members.sort();
    // console.log(sorted);
    let abbreviation = '';
    
    for (var i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
         abbreviation += members[i].trim()[0];
        } 
  } return abbreviation.toUpperCase().split('').sort().join('');
  } return false;
};
