import * as React from "react";
import "./tree.styles.css";
import pathShapes from "./pathShapes";

export enum PathShape {
  Bezier = "bezier",
  Stright = "stright",
  RoundedAngles = "roundedAngles"
}

export type PathFunction = (x1: number, y1: number, x2: number, y2: number) => string;

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

interface Path {
  id: string;
  path: string;
}

export type TreeElementWithCoords = Omit<TreeElement, "children"> & {
  x: number;
  y: number;
  height: number;
  widht: number;
  level: number;
  children: TreeElementWithCoords[];
};

function processTree(
  rootElement: TreeElement,
  yOffset: number,
  xOffset: number | ((level: number) => number),
  cellWidht: number,
  cellHeight: number
): TreeElementWithCoords {
  let maxY: number = 0;

  function calculateCoords(treeElement: TreeElement, level: number = 0): TreeElementWithCoords {
    const children: TreeElementWithCoords[] = treeElement.children.map((ch: TreeElement) =>
      calculateCoords(ch, level + 1)
    );

    let y: number;

    if (children.length !== 0) {
      y = Math.round((children[0].y + children[children.length - 1].y) / 2);
    } else {
      y = maxY;
      maxY = maxY + yOffset + cellHeight;
    }

    const curentXOffset: number = typeof xOffset === "number" ? xOffset : xOffset(level);

    return {
      ...treeElement,
      x: level * (curentXOffset + cellWidht),
      y: y,
      children: children,
      height: cellHeight,
      widht: cellWidht,
      level: level
    };
  }
  return calculateCoords(rootElement);
}

function createNodesArray(node: TreeElementWithCoords): TreeElementWithCoords[] {
  return node.children.reduce((nodes, child) => [...nodes, ...createNodesArray(child)], [node]);
}

function createPath(
  parentNode: TreeElementWithCoords,
  childNode: TreeElementWithCoords,
  pathStyle: PathFunction
): Path {
  const parentNodeX: number = parentNode.x + parentNode.widht;
  const parentNodeY: number = parentNode.y + parentNode.height / 2;
  const childNodeX: number = childNode.x;
  const childNodeY: number = childNode.y + childNode.height / 2;
  const id: string = parentNode.id + "--" + childNode.id;
  return { path: pathStyle(parentNodeX, parentNodeY, childNodeX, childNodeY), id: id };
}

function createConnectingLinesArray(
  node: TreeElementWithCoords,
  cellWidht: number,
  cellHeight: number,
  pathStyle: PathFunction
): Path[] {
  const linesToChildren: Path[] = node.children.map(child => createPath(node, child, pathStyle));
  const connectingLines: Path[] = node.children.reduce(
    (lines, node) => [...lines, ...createConnectingLinesArray(node, cellWidht, cellHeight, pathStyle)],
    linesToChildren
  );

  return connectingLines;
}

export class Tree extends React.Component<TreeProps> {
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
      nodeContent: content
    }: TreeProps = this.props;
    
    const pathStyle: PathFunction =
    typeof this.props.pathShape == "function" ? this.props.pathShape : pathShapes[this.props.pathShape];
    
    const dataTree: TreeElementWithCoords = processTree(data, yOffset, xOffset, nodeWidth, nodeHeight);

    const dataList: TreeElementWithCoords[] = createNodesArray(dataTree);
    
    const connectingLines: Path[] = createConnectingLinesArray(dataTree, nodeWidth, nodeHeight, pathStyle);

    const { width, height }: { width: number; height: number } = dataList.reduce(
      (limits, node) => ({
        width: Math.max(limits.width, node.x + node.widht),
        height: Math.max(limits.height, node.y + node.height)
      }),
      { width: 0, height: 0 }
    );
    console.log("0000");
    
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
  }
}

