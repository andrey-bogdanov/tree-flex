import * as React from "react";
import "./tree-styles.css";
import pathShapes, { staticRadiusRoundedAngles } from "./path-shapes";
import {
  processTree,
  createNodesArray,
  createConnectingLinesArray,
}
  from "./tree-build-functions";
import {
  PathFunction,
  TreeElementWithCoords,
  TreeProps,
  Path,
  Direction
}
  from "./interfaces";

export class TreeGraphFlex extends React.Component<TreeProps> {
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
  static defaultProps: Pick<TreeProps, "pathShape" | "nodeWidth" | "nodeHeight" | "lineClassName" | "xOffset" | "yOffset" | "nodeBoxClassName" | "direction"> = {
    pathShape: pathShapes.bezier,
    nodeWidth: 100,
    nodeHeight: 50,
    lineClassName: "connectingLine",
    nodeBoxClassName: "nodeBox",
    xOffset: 50,
    yOffset: 50,
    direction: Direction.Forward,
  };

  render(): React.ReactElement {
    const {
      nodeWidth,
      nodeHeight,
      data,
      yOffset,
      xOffset,
      lineClassName,
      nodeBoxClassName,
      nodeContent: content,
      direction
    }: TreeProps = this.props;



    const pathStyle: PathFunction = typeof this.props.pathShape == "function" ? this.props.pathShape : pathShapes[this.props.pathShape];
    const dataTree: TreeElementWithCoords = processTree(data, yOffset, xOffset, nodeWidth, nodeHeight);
    const dataList: TreeElementWithCoords[] = createNodesArray(dataTree);
    const { width, height }: { width: number; height: number } = dataList.reduce(
      (limits, node) => ({
        width: Math.max(limits.width, node.x + node.width),
        height: Math.max(limits.height, node.y + node.height)
      }),
      { width: 0, height: 0 }
    );

    const connectingLines: Path[] = createConnectingLinesArray(dataTree, nodeWidth, nodeHeight, pathStyle, width, direction);
    console.log(direction, "direction")

    function defineDirection(node: TreeElementWithCoords): TreeElementWithCoords {
      if (direction === "forward") {
        return node
      } else {
        return {
          ...node,
          x: width - node.x - node.width
        }
      }
    }

    return (
      <div>
        <div className="root" style={{ width: width, height: height }}>
          <div>
            {dataList.map(node => (
              <div
                style={{ height: nodeHeight, width: nodeWidth, top: node.y, left: defineDirection(node).x }}
                className={nodeBoxClassName}
                key={node.id}
              >
                {content(node)}
              </div>
            ))}
          </div>
          <svg width={width} height={height}>
            {connectingLines.map((path: Path) => (
              <path d={path.path} className={lineClassName} key={path.id} />
            ))}
          </svg>
        </div>
      </div>
    );
  };
};
