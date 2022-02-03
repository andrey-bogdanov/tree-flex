import { PathShape, PathFunction } from "./tree.component";

export function bezier(x1: number, y1: number, x2: number, y2: number): string {
  return `M${x1} ${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`;
}

export function roundedAngles(x1: number, y1: number, x8: number, y8: number, radius: number = 20 ): string {
  const x3: number = (x8 + x1) / 2;
  const y3: number = y1;
  const x2: number = x3 - radius * Math.sign(x8 - x1);
  const y2: number = y1;
  const x4: number = x3;
  const y4: number = y3 + radius * Math.sign(y8 - y1);
  const x6: number = x3;
  const y6: number = y8;
  const x5: number = x3;
  const y5: number = y8 - radius * Math.sign(y8 - y1);
  const x7: number = x6 + radius * Math.sign(x8 - x1);
  const y7: number = y8;
  return `M ${x1} ${y1} L ${x2} ${y2} Q ${x3} ${y3}, ${x4} ${y4} L ${x5} ${y5} Q ${x6} ${y6}, ${x7} ${y7} L ${x8} ${y8}`;
}

export function stright(x1: number, y1: number, x2: number, y2: number): string {
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

const pathShapes: { [key in PathShape]: PathFunction } = {
  bezier: bezier,
  roundedAngles: roundedAngles,
  stright: stright
};

export default pathShapes;
