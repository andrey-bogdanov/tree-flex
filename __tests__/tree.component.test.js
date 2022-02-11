import React from "react";
import ReactDOM from "react-dom";
import data from "../src/data";
import '@testing-library/jest-dom'
import { Tree } from "../src/components/tree-component/tree.component";

const nodeMock = jest.fn((node) => 
(<div id={node.id}>
  <p>{node.id}</p> 
  <p>{node.name} </p>
  </div>));

describe("Tree component tests", () => {
  let root;
  beforeEach(() => {
    root = document.createElement("div");
  });
  const subject = () => ReactDOM.render(<Tree data={data} nodeContent={nodeMock} />, root);

  test("node function calling", () => {
    subject();
    expect(nodeMock).toBeCalledTimes(25);
    expect(nodeMock).toHaveBeenLastCalledWith({"children": [], "height": 50, "id": "node23_1", "level": 3, "widht": 100, "x": 450, "y": 1400});
    expect(nodeMock).toHaveBeenNthCalledWith(24, {
        "children":  [{
            "children": [],
            "height": 50,
            "id": "node23_1",
            "level": 3,
            "widht": 100,
            "x": 450,
            "y": 1400
           },],
         "height": 50,
         "id": "node23",
         "level": 2,
         "widht": 100,
         "x": 300,
          "y": 1400,
        });
  });

  test("node content", () => {
    subject();
    const element1 = root.querySelector("#node1");
    expect(element1).toHaveTextContent("node 1 level 0");
    const element2 = root.querySelector("#node2_2");
    expect(element2).toHaveTextContent("node 1_2 level 2");
  });

});
