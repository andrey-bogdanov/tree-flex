import { PathShape, PathFunction } from "./tree.component";
export declare function bezier(x1: number, y1: number, x2: number, y2: number): string;
export declare function roundedAngles(x1: number, y1: number, x8: number, y8: number, radius?: number): string;
export declare function stright(x1: number, y1: number, x2: number, y2: number): string;
declare const pathShapes: {
    [key in PathShape]: PathFunction;
};
export default pathShapes;
