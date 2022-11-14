"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.PathShape = void 0;
;
;
/**
 * @enum PathShape
 */
var PathShape;
(function (PathShape) {
    PathShape["Bezier"] = "bezier";
    PathShape["Straight"] = "straight";
    PathShape["RoundedAngles"] = "roundedAngles";
})(PathShape = exports.PathShape || (exports.PathShape = {}));
;
;
/**
 * @interface Direction
 */
var Direction;
(function (Direction) {
    Direction["Forward"] = "forward";
    Direction["Reverse"] = "reverse";
})(Direction = exports.Direction || (exports.Direction = {}));
;
