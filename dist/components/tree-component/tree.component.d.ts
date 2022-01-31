import * as React from "react";
import "./tree.styles.css";
export declare enum PathShape {
    Bezier = "bezier",
    Stright = "stright",
    RoundedAngles = "roundedAngles"
}
export declare type PathFunction = (x1: number, y1: number, x2: number, y2: number) => string;
interface TreeProps {
    data: TreeElement;
    nodeWidth?: number;
    nodeHeight?: number;
    xOffset?: number | ((level: number) => number);
    yOffset?: number;
    pathShape?: PathShape | PathFunction;
    nodeContent: (node: TreeElementWithCoords) => React.ReactElement;
    lineClassName?: string;
}
export interface TreeElement {
    id: string;
    children: TreeElement[];
}
export declare type TreeElementWithCoords = Omit<TreeElement, "children"> & {
    x: number;
    y: number;
    height: number;
    widht: number;
    level: number;
    children: TreeElementWithCoords[];
};
export declare class Tree extends React.Component<TreeProps> {
    static defaultProps: Pick<TreeProps, "pathShape" | "nodeWidth" | "nodeHeight" | "lineClassName" | "xOffset" | "yOffset">;
    render(): React.ReactElement;
}
export {};
