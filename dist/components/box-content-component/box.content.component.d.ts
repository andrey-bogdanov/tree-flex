import * as React from "react";
import "./box.content.styles.scss";
import { TreeElement } from "../tree-component/tree.component";
interface ContentBoxProps {
    node: TreeElement;
}
declare class BoxContent extends React.Component<ContentBoxProps> {
    render(): React.ReactElement;
}
export default BoxContent;
