import { TreeElement, PathFunction, TreeElementWithCoords, Path } from "./interfaces";
/**
 * Calculates and adds coordinates into source object
 * @param rootElement - source object
 * @param {number} yOffset - distance between adjacent nodes by y
 * @param { number | function } xOffset - distance between adjacent nodes by x
 * @param { number } cellwidth - node width
 * @param { number } cellHeight - node height
 * @returns {object} sourse object with coordinates
 */
export declare function processTree(rootElement: TreeElement, yOffset: number, xOffset: number | ((level: number) => number), cellwidth: number, cellHeight: number): TreeElementWithCoords;
/**
 * makes flat array from tree object
 * @param { TreeElementWithCoords } node - source object with coordinates
 * @returns nodes array
 */
export declare function createNodesArray(node: TreeElementWithCoords): TreeElementWithCoords[];
/**
 * creates connecting line between adjacent nodes
 * @param { TreeElementWithCoords } parentNode - node from which the line begins
 * @param { TreeElementWithCoords } childNode - node to which the line ends
 * @param { enum | function} pathStyle - function which define line shape
 * @returns attribute d for <path> tsg
 */
export declare function createPath(parentNode: TreeElementWithCoords, childNode: TreeElementWithCoords, pathStyle: PathFunction): Path;
/**
 * Creates array of connecting lines
 * @param {object} node - source object with coordinates
 * @param {number} cellwidth - node width
 * @param {number} cellHeight - node height
 * @param {function} pathStyle - path style function
 * @returns array of objects with line id and b attribute of <path> tag
 */
export declare function createConnectingLinesArray(node: TreeElementWithCoords, cellwidth: number, cellHeight: number, pathStyle: PathFunction): Path[];
