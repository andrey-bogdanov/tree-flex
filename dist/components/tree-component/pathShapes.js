"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.straight = exports.staticRadiusRoundedAngles = exports.roundedAngles = exports.bezier = void 0;
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
* calculates radius for angles arcs
* @param x1 - start point x
* @param y1 - start point y
* @param x8 - end point x
* @param y8 - end point y
* @returns - function staticRadiusRoundedAngles
*/
function roundedAngles(x1, y1, x8, y8) {
    var radius = Math.min(Math.abs(y1 - y8) / 3, Math.abs(x1 - x8) / 3);
    return staticRadiusRoundedAngles(x1, y1, x8, y8, radius);
}
exports.roundedAngles = roundedAngles;
/**
 * calculates d attribute for path tag from two nodes coordinates.
 * @param x1 - start point x
 * @param y1 - start point y
 * @param x8 - end point x
 * @param y8 - end point y
 * @param radius -  angles arcs radius
 * @returns - d attribute for <path>
 */
function staticRadiusRoundedAngles(x1, y1, x8, y8, radius) {
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
exports.staticRadiusRoundedAngles = staticRadiusRoundedAngles;
function straight(x1, y1, x2, y2) {
    return "M ".concat(x1, " ").concat(y1, " L ").concat(x2, " ").concat(y2);
}
exports.straight = straight;
/**
* calculates d attribute for path tag from two nodes coordinates.
* @param x1 - starp point x
* @param y1- starp point x
* @param x2 - end point x
* @param y2 - end point x
* @returns { string } - d attribute for <path>
*/
var pathShapes = {
    bezier: bezier,
    roundedAngles: roundedAngles,
    straight: straight
};
exports.default = pathShapes;
