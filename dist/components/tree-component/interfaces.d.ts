/// <reference types="react" />
export interface TreeElement {
    id: string;
    children: TreeElement[];
}
export declare type PathFunction = (x1: number, y1: number, x2: number, y2: number) => string;
export declare enum PathShape {
    Bezier = "bezier",
    Stright = "stright",
    RoundedAngles = "roundedAngles"
}
export declare type TreeElementWithCoords = Omit<TreeElement, "children"> & {
    x: number;
    y: number;
    height: number;
    width: number;
    level: number;
    children: TreeElementWithCoords[];
};
export interface TreeProps {
    data: TreeElement;
    nodeWidth?: number;
    nodeHeight?: number;
    xOffset?: number | ((level: number) => number);
    yOffset?: number;
    pathShape?: PathShape | PathFunction;
    nodeContent: (node: TreeElementWithCoords) => React.ReactElement;
    lineClassName?: string;
}
export interface Path {
    id: string;
    path: string;
}
