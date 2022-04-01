import * as React from "react";
import "./tree-styles.css";
import { TreeProps } from "./interfaces";
export declare class TreeGraphFlex extends React.Component<TreeProps> {
    /**
    * @class Tree
    * builds tree graph from user's object. Graph exist is rectangles(nodes) and connecting lines.
    * @param {TreeElement} data - source user's object.
    * @param {number} nodeWidth - width of the rectangle(node) in pixels, that user's content is placed in. Not mandatory. 100 by default.
    * @param {number} nodeHeight - height of the node in pixels. 50 by default.
    * @param {number | function} xOffset -  x distance between adjacent two nodes. By default 50 pixels. Also, it may be a custom function.
    * @param {PathShape | PathFunction} pathShape - funcion, calculates svg lines between two nodes. There are three offered functions. bezier by default. Also, it may be a custom function.
    * @param {function} nodeContent - user's function, returns HTML element, wich will be placed into node rectangle.
    * @param {string} lineClassName - connecting lines className. Located in tree.style.css. By default "connectingLine".
    * @returns {HTMLElement} renders tree
    */
    static defaultProps: Pick<TreeProps, "pathShape" | "nodeWidth" | "nodeHeight" | "lineClassName" | "xOffset" | "yOffset">;
    render(): React.ReactElement;
}
