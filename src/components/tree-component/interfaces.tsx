/**
 * @interface TreeElement 
 */
export interface TreeElement {
  id: string;
  children: TreeElement[];
};

/**
 * @interface TreeProps 
 */
export interface TreeProps { 
  data: TreeElement;
  nodeWidth?: number;
  nodeHeight?: number;
  xOffset?: number | ((level: number) => number);
  yOffset?: number;
  pathShape?: string | PathFunction;
  nodeContent: (node: TreeElementWithCoords) => React.ReactElement;
  lineClassName?: string;
};

/**
 * @interface TreeElementWithCoords
 */
export type TreeElementWithCoords = Omit<TreeElement, "children"> & {
  x: number;
  y: number;
  height: number;
  width: number;
  level: number;
  children: TreeElementWithCoords[];
};

/**
 * @interface TreeElement 
 */
export type PathFunction = (x1: number, y1: number, x2: number, y2: number) => string;

/**
 * @enum PathShape 
 */
export enum PathShape {
  Bezier = "bezier",
  Straight = "straight",
  RoundedAngles = "roundedAngles",
};

/**
 * @interface Path 
 */
export interface Path {
  id: string;
  path: string;
};
