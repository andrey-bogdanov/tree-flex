"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.straight = exports.roundedAngles = exports.bezier = void 0;
/**
 * calculates d attribute for path tag from two nodes coordinates.
 * @param x1 - starp point x
 * @param y1- starp point x
 * @param x2 - end point x
 * @param y2 - end point x
 * @returns { string } - d attribute for <path>
 */
function bezier(x1, y1, x2, y2) {
    return "M".concat(x1, " ").concat(y1, " C").concat((x1 + x2) / 2, ",").concat(y1, " ").concat((x1 + x2) / 2, ",").concat(y2, " ").concat(x2, ",").concat(y2);
}
exports.bezier = bezier;
/**
 * calculates d attribute for path tag from two nodes coordinates.
 * @param x1 - starp point x
 * @param y1 - starp point x
 * @param x8 - end point x
 * @param y8 - end point x
 * @param radius - optional parameter
 * @returns
 */
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
    if ((y1 < y8 && y5 < y4) || (y1 > y8 && y5 > y4)) {
        var radius_1 = 5;
        var x3_1 = (x8 + x1) / 2;
        var y3_1 = y1;
        var x2_1 = x3_1 - radius_1 * Math.sign(x8 - x1);
        var y2_1 = y1;
        var x4_1 = x3_1;
        var y4_1 = y3_1 + radius_1 * Math.sign(y8 - y1);
        var x6_1 = x3_1;
        var y6_1 = y8;
        var x5_1 = x3_1;
        var y5_1 = y8 - radius_1 * Math.sign(y8 - y1);
        var x7_1 = x6_1 + radius_1 * Math.sign(x8 - x1);
        var y7_1 = y8;
        return "M ".concat(x1, " ").concat(y1, " L ").concat(x2_1, " ").concat(y2_1, " Q ").concat(x3_1, " ").concat(y3_1, ", ").concat(x4_1, " ").concat(y4_1, " L ").concat(x5_1, " ").concat(y5_1, " Q ").concat(x6_1, " ").concat(y6_1, ", ").concat(x7_1, " ").concat(y7_1, " L ").concat(x8, " ").concat(y8);
    }
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
