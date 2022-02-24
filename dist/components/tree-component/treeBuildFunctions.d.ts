import { TreeElement, PathFunction, TreeElementWithCoords, Path } from "./interfaces";
export declare function processTree(rootElement: TreeElement, yOffset: number, xOffset: number | ((level: number) => number), cellwidth: number, cellHeight: number): TreeElementWithCoords;
export declare function createNodesArray(node: TreeElementWithCoords): TreeElementWithCoords[];
export declare function createPath(parentNode: TreeElementWithCoords, childNode: TreeElementWithCoords, pathStyle: PathFunction): Path;
export declare function createConnectingLinesArray(node: TreeElementWithCoords, cellwidth: number, cellHeight: number, pathStyle: PathFunction): Path[];
