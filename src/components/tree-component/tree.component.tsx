import * as React from "react";
import "./tree.styles.css";
import pathShapes from "./pathShapes";
import 
  { processTree, 
    createNodesArray, 
    createConnectingLinesArray,
  } 
from "./treeBuildFunctions";
import 
  {
    PathFunction,
    TreeElementWithCoords,
    TreeProps,
    Path
  }
from "./interfaces";

export class Tree extends React.Component<TreeProps> {
    /**
    * Class Tree builds tree graph from user's object. Graph exist is rectangles(nodes) and connecting lines. 
    * @param {TreeElement} data - source user's object.
    * @param {number} nodeWidth - width of the rectangle(node) in pixels, that user's content is placed in. Not mandatory. 100 by default.
    * @param {number} nodeHeight - height of the node in pixels. 50 by default.
    * @param {number | function} xOffset -  x distance between adjacent two nodes. By default 50 pixels. Also, it may be a custom function.
    * @param {PathShape | PathFunction} pathShape - funcion, calculates svg lines between two nodes. There are three offered functions. bezier by default. Also, it may be a custom function.
    * @param {function} nodeContent - user's function, returns HTML element, wich will be placed into node rectangle.
    * @param {string} lineClassName - connecting lines className. Located in tree.style.css. By default "connectingLine".
    */
  static defaultProps: Pick<TreeProps, "pathShape" | "nodeWidth" | "nodeHeight" | "lineClassName" | "xOffset" | "yOffset"> = {
    pathShape: pathShapes.bezier,
    nodeWidth: 100,
    nodeHeight: 50,
    lineClassName: "connectingLine",
    xOffset: 50,
    yOffset: 50,
  };
  
  render(): React.ReactElement {
    const {
      nodeWidth,
      nodeHeight,
      data,
      yOffset,
      xOffset,
      lineClassName,
      // pathShape,
      nodeContent: content
    }: TreeProps = this.props;

    console.log(this.props.pathShape);
    
    const pathStyle: PathFunction =
    typeof this.props.pathShape == "function" ? this.props.pathShape : pathShapes[this.props.pathShape];
    
    const dataTree: TreeElementWithCoords = processTree(data, yOffset, xOffset, nodeWidth, nodeHeight);

    const dataList: TreeElementWithCoords[] = createNodesArray(dataTree);
    
    const connectingLines: Path[] = createConnectingLinesArray(dataTree, nodeWidth, nodeHeight, pathStyle);

    const { width, height }: { width: number; height: number } = dataList.reduce(
      (limits, node) => ({
        width: Math.max(limits.width, node.x + node.width),
        height: Math.max(limits.height, node.y + node.height)
      }),
      { width: 0, height: 0 }
    );
    
    return (
      <div>
        <div className="root" style={{ width: width, height: height }}>
          <div>
            {dataList.map(node => (
              <div
                style={{ height: nodeHeight, width: nodeWidth, top: node.y, left: node.x }}
                className="nodeBox"
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
