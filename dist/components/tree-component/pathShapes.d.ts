import { PathFunction, PathShape } from "./interfaces";
/**
 * calculates d attribute for path tag from two nodes coordinates.
 * @param x1 - starp point x
 * @param y1- starp point x
 * @param x2 - end point x
 * @param y2 - end point x
 * @returns { string } - d attribute for <path>
 */
export declare function bezier(x1: number, y1: number, x2: number, y2: number): string;
/**
* calculates radius for angles arcs
* @param x1 - start point x
* @param y1 - start point y
* @param x8 - end point x
* @param y8 - end point y
* @returns - function staticRadiusRoundedAngles
*/
export declare function roundedAngles(x1: number, y1: number, x8: number, y8: number): string;
/**
 * calculates d attribute for path tag from two nodes coordinates.
 * @param x1 - start point x
 * @param y1 - start point y
 * @param x8 - end point x
 * @param y8 - end point y
 * @param radius -  angles arcs radius
 * @returns - d attribute for <path>
 */
export declare function staticRadiusRoundedAngles(x1: number, y1: number, x8: number, y8: number, radius: number): string;
/**
* calculates d attribute for path tag from two nodes coordinates.
* @param x1 - starp point x
* @param y1- starp point x
* @param x2 - end point x
* @param y2 - end point x
* @returns { string } - d attribute for <path>
*/
export declare function straight(x1: number, y1: number, x2: number, y2: number): string;
declare const pathShapes: {
    [key in PathShape]: PathFunction;
};
export default pathShapes;
