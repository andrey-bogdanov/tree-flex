import 
  { 
    TreeElement, 
    PathFunction,
    TreeElementWithCoords,
    Path
  } 
from "./interfaces"

export function processTree(
  rootElement: TreeElement,
  yOffset: number,
  xOffset: number | ((level: number) => number),
  cellwidth: number,
  cellHeight: number
): TreeElementWithCoords {
  let maxY: number = 0;

  function calculateCoords(treeElement: TreeElement, level: number = 0): TreeElementWithCoords {
    
    const children: TreeElementWithCoords[] = treeElement.children.map((child: TreeElement) =>
      calculateCoords(child, level + 1)
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
      x: level * (curentXOffset + cellwidth),
      y: y,
      children: children,
      height: cellHeight,
      width: cellwidth,
      level: level
    };
  }

  return calculateCoords(rootElement);
}

export function createNodesArray(node: TreeElementWithCoords): TreeElementWithCoords[] {
  return node.children.reduce((nodes, child) => [...nodes, ...createNodesArray(child)], [node]);
}

export function createPath(
  parentNode: TreeElementWithCoords,
  childNode: TreeElementWithCoords,
  pathStyle: PathFunction
): Path {
  const parentNodeX: number = parentNode.x + parentNode.width;
  const parentNodeY: number = parentNode.y + parentNode.height / 2;
  const childNodeX: number = childNode.x;
  const childNodeY: number = childNode.y + childNode.height / 2;
  const id: string = parentNode.id + "--" + childNode.id;
  return { path: pathStyle(parentNodeX, parentNodeY, childNodeX, childNodeY), id: id };
}

export function createConnectingLinesArray(
  node: TreeElementWithCoords,
  cellwidth: number,
  cellHeight: number,
  pathStyle: PathFunction
): Path[] {
  const linesToChildren: Path[] = node.children.map(child => createPath(node, child, pathStyle));
  const connectingLines: Path[] = node.children.reduce(
    (lines, node) => [...lines, ...createConnectingLinesArray(node, cellwidth, cellHeight, pathStyle)],
    linesToChildren
  );
    return connectingLines;
}