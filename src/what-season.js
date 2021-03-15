const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == '' ) {
    return 'Unable to determine the time of year!';
  }

  if (typeof date == null || typeof date == undefined) {
    throw new CustomError('THROWN');
  }

  let month = date.getMonth();

    switch (month) {
      case 12 || 1 || 2 :
        return 'winter';
      case 3 || 4 || 5 :
        return 'spring';
      case 6 || 7 || 8 :
        return 'summer';
      case 9 || 10 || 11 :
        return 'autumn';
    }
};


// getSeason(1994, 1, 2, 3, 4, 5);
