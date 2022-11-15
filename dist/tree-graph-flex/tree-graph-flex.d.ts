import * as React from "react";
import "./tree-styles.css";
import { TreeProps } from "./interfaces";
export declare class TreeGraphFlex extends React.Component<TreeProps> {
    /**
    * @class Tree
    * builds tree graph from user's object. Graph exist is rectangles(nodes) and connecting lines.
    * @param {TreeElement} data - source user's object.
    * @param {number} nodeWidth - width of the rectangle(node) in pixels, that user's content is placed in. Not mandatory. 100 pixels by default.
    * @param {number} nodeHeight - height of the node in pixels. 50 pixels by default.
    * @param {number | function} xOffset -  distance by x between adjacent two nodes. By default 50 pixels. Also, it may be a custom function.
    * @param {number} yOffset -  distance by y between adjacent two nodes. By default 50 pixels.
    * @param {PathShape | PathFunction} pathShape - funcion, calculates svg lines between two nodes. There are three offered functions. "bezier" by default. Also, it may be a custom function.
    * @param {function} nodeContent - user's function, returns HTML element, which will be placed into node box.
    * @param {string} lineClassName - connecting lines className. Locates in tree.style.css. By default "connectingLine".
    * @param {string} nodeBoxClassName - className, defines style of node view. Locates in tree.style.css. By default "nodeBox".
    * @param {string} direction - defines diagram direction. Forward - root node at left, reverse - at right.
    * @returns {HTMLElement} renders tree
    */
    static defaultProps: Pick<TreeProps, "pathShape" | "nodeWidth" | "nodeHeight" | "lineClassName" | "xOffset" | "yOffset" | "nodeBoxClassName" | "direction">;
    render(): React.ReactElement;
}
