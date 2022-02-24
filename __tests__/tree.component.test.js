import React from "react";
import ReactDOM from "react-dom";
import { dataLong, dataOne} from "../src/data";
import '@testing-library/jest-dom';
import { Tree } from "../src/components/tree-component/tree.component";

describe("graph rendering tests", () => {

  describe ("data contain 25 nodes", () => {

    const nodeContentMock = jest.fn((node) => 
    (<div id={node.id}>
    <p>{node.id}</p> 
    <p>{node.name}</p>
    </div>));

    function subject() {
      const root = document.createElement("div");
      ReactDOM.render(<Tree data={dataLong} nodeContent={nodeContentMock} />, root);
      return root;
    };

    const nodeCount = 25;

    test("node called times", () => {
      subject();
      expect(nodeContentMock).toBeCalledTimes(nodeCount);
    });

    test ("node called with params", () => {
      subject();
      expect(nodeContentMock).toHaveBeenLastCalledWith({"children": [], "height": 50, "id": "node23_1", "level": 3, "width": 100, "x": 450, "y": 1400});
      expect(nodeContentMock).toHaveBeenNthCalledWith(24, {
        "children":  [{
            "children": [],
            "height": 50,
            "id": "node23_1",
            "level": 3,
            "width": 100,
            "x": 450,
            "y": 1400
            },],
          "height": 50,
          "id": "node23",
          "level": 2,
          "width": 100,
          "x": 300,
          "y": 1400,
      });
    });

    test("nodes have content", () => {
      const root = subject();
      const element1 = root.querySelector("#node1");
      expect(element1).toHaveTextContent("node 1 level 0");
      const element2 = root.querySelector("#node2_2");
      expect(element2).toHaveTextContent("node 1_2 level 2");
    });
  });

  describe ("data have one node", () => {

    const nodeContentMock = jest.fn((node) => 
    (<p> {node.id} {node.children}</p>));

    function subject() {
      const root = document.createElement("div");
      ReactDOM.render(<Tree data={dataOne} nodeContent={nodeContentMock} />, root);
      return root;
    };
    
    test("node called times", () => {
      subject();
      expect(nodeContentMock).toBeCalledTimes(1);
    });

    test("nodes have content", () => {
      const root = subject()
      expect(root).toHaveTextContent("0");
    })

  })
});


//-----------------------------------------------------------------------------------------


const spyBezier = jest.fn(() => "bezierResult");

describe ("path rendering tests", ()=> {

  const nodeContentMock = jest.fn(() => 
  (<p></p>));
  
  function subject(path) {
    const root = document.createElement("div");
    ReactDOM.render(<Tree data={dataLong} nodeContent={nodeContentMock} pathShape={path}/>, root)
    return (root);
  };

  const linesCount = 24;

  test("path shape called times", () => {
    subject(spyBezier);
    expect(spyBezier).toHaveBeenCalledTimes(linesCount);
  });

  test("path shape called with", () => {
    expect(spyBezier).toHaveBeenLastCalledWith(400, 1425, 450, 1425);
  });

  test("lines has className", () => {
    const root = subject(spyBezier);
    const path = root.querySelector("path");
    expect(path).toHaveClass("connectingLine");
  });

});