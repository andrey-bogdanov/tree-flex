import * as React from "react";

import "./box.content.styles.scss";

import { TreeElement } from "../tree-component/tree.component";

interface ContentBoxProps {
  node: TreeElement;
}

class BoxContent extends React.Component<ContentBoxProps> {
  render(): React.ReactElement {
    const  elementId = this.props.node.id;
    return (
      <div className="root">
        <div className="root">
          {this.props.node.id}
          <div className="shadowBox"> </div>
        </div>
      </div>
    );
  }
}

export default BoxContent;
