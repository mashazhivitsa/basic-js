const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(value) {

      let arrDepth = 0;
      if (typeof (value) != "object") return arrDepth;

      value.forEach(level => arrDepth = Math.max(this.calculateDepth(level), arrDepth));

      return arrDepth + 1;
  }
};