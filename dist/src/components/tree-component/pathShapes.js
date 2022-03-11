"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.straight = exports.roundedAngles = exports.bezier = void 0;
function bezier(x1, y1, x2, y2) {
  return "M".concat(x1, " ").concat(y1, " C").concat((x1 + x2) / 2, ",").concat(y1, " ").concat((x1 + x2) / 2, ",").concat(y2, " ").concat(x2, ",").concat(y2);
}
exports.bezier = bezier;
function roundedAngles(x1, y1, x8, y8, radius) {
  if (radius === void 0) { radius = 20; }
  var x3 = (x8 + x1) / 2;
  var y3 = y1;
  var x2 = x3 - radius * Math.sign(x8 - x1);
  var y2 = y1;
  var x4 = x3;
  var y4 = y3 + radius * Math.sign(y8 - y1);
  var x6 = x3;
  var y6 = y8;
  var x5 = x3;
  var y5 = y8 - radius * Math.sign(y8 - y1);
  var x7 = x6 + radius * Math.sign(x8 - x1);
  var y7 = y8;
  return "M ".concat(x1, " ").concat(y1, " L ").concat(x2, " ").concat(y2, " Q ").concat(x3, " ").concat(y3, ", ").concat(x4, " ").concat(y4, " L ").concat(x5, " ").concat(y5, " Q ").concat(x6, " ").concat(y6, ", ").concat(x7, " ").concat(y7, " L ").concat(x8, " ").concat(y8);
}
exports.roundedAngles = roundedAngles;
function straight(x1, y1, x2, y2) {
  return "M ".concat(x1, " ").concat(y1, " L ").concat(x2, " ").concat(y2);
}
exports.straight = straight;
var pathShapes = {
  bezier: bezier,
  roundedAngles: roundedAngles,
  straight: straight
};
exports.default = pathShapes;
