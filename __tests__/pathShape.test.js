import React from "react";
import ReactDOM from "react-dom";
import data from "../src/data";
import '@testing-library/jest-dom'
import { Tree } from "../src/components/tree-component/tree.component";
import  { bezier, roundedAngles, stright } from "../src/components/tree-component/pathShapes";

const node = node => (
  <div id={node.id}>
  <p>{node.id}</p> 
  <p>{node.name} </p>
  </div>
);

const spyBezier = jest.fn(() => bezier());
const spyRoundedAngles = jest.fn(() => roundedAngles());
const spyStright = jest.fn(() => stright());

describe("PathShape test", () => {
  
  let root;
  beforeEach(() => {
    root = document.createElement("div");
  });

  const subject = (path) => ReactDOM.render(<Tree data={data} nodeContent={node} pathShape={path}/>, 
  root);

  test("bezier", () => {
    subject(spyBezier);
    expect(spyBezier).toHaveBeenCalledTimes(24); 
    expect(spyBezier).toHaveBeenLastCalledWith(400, 1425, 450, 1425);
    expect(bezier(400, 1425, 450, 1425)).toBe("M400 1425 C425,1425 425,1425 450,1425");
  });

  test("roundedAngles", () => {
    subject(spyRoundedAngles);
    expect(spyRoundedAngles).toHaveBeenCalledTimes(24);
    expect(spyRoundedAngles).toHaveBeenLastCalledWith(400, 1425, 450, 1425);
    expect(roundedAngles(400, 1425, 450, 1425)).toBe("M 400 1425 L 405 1425 Q 425 1425, 425 1425 L 425 1425 Q 425 1425, 445 1425 L 450 1425");
  });

  test("stright", () => {
    subject(spyStright); 
    expect(spyStright).toHaveBeenCalledTimes(24);
    expect(spyStright).toHaveBeenLastCalledWith(400, 1425, 450, 1425);
    expect(stright(400, 1425, 450, 1425)).toBe("M 400 1425 L 450 1425");
  });

});
