import * as React from "react";
import "./tree.styles.css";
import { TreeProps } from "./interfaces";
export declare class Tree extends React.Component<TreeProps> {
    static defaultProps: Pick<TreeProps, "pathShape" | "nodeWidth" | "nodeHeight" | "lineClassName" | "xOffset" | "yOffset">;
    render(): React.ReactElement;
}
