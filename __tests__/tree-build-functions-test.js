import { processTree, createNodesArray, createPath, createConnectingLinesArray } from "../src/tree-graph-flex/tree-build-functions";
import { dataLong, dataOne, dataStraight } from "../src/data";
import { bezier, straight, roundedAngles } from "../src/tree-graph-flex/path-shapes"


describe("processTree, calculating and adding coords, size and level into source object", () => {

  const subject = (dataObject, yOffset = 50, xOffset = 50, cellwidth = 100, cellHeigh = 50) => (
    processTree(dataObject, yOffset, xOffset, cellwidth, cellHeigh)
  );

  test("25 nodes object", () => {
    expect(subject(dataLong)).toBeDefined();
    expect(subject(dataLong).children[1].children[0].children[1]).toEqual(
      {
        "children": [],
        "height": 50,
        "id": "node12_2",
        "level": 3,
        "width": 100,
        "x": 450,
        "y": 700
      }
    );
  });

  test("1 nodes object", () => {
    expect(subject(dataOne)).toEqual(
      {
        "children": [],
        "height": 50,
        "id": "0",
        "level": 0,
        "width": 100,
        "x": 0,
        "y": 0
      }
    );
  });

  test("4 nodes with one children object", () => {
    expect(subject(dataStraight).children[0].children[0].children[0]).toEqual(
      {
        "children": [],
        "height": 50,
        "id": "4",
        "level": 3,
        "width": 100,
        "x": 450,
        "y": 0
      }
    );
  });

});

describe("createNodesArray, creating flat array from object", () => {

  const subject = (dataObject) => {
    return createNodesArray(processTree(dataObject, 50, 50, 100, 50))
  };

  describe("25 nodes object", () => {

    test("length", () => {
      expect(subject(dataLong).length).toEqual(25);
    });

    test("content 25 element", () => {
      expect(subject(dataLong)[24]).toEqual(
        {
          "children": [],
          "height": 50,
          "id": "node23_1",
          "level": 3,
          "width": 100,
          "x": 450,
          "y": 1400
        }
      );
    });
  });

  describe("1 node object", () => {

    test("length", () => {
      expect(subject(dataOne).length).toEqual(1);
    });

    test("content", () => {
      expect(subject(dataOne)[0]).toEqual(
        {
          "children": [],
          "height": 50,
          "id": "0",
          "level": 0,
          "width": 100,
          "x": 0,
          "y": 0
        }
      );
    });
  });

  describe("4 nodes with one children object", () => {

    test("length", () => {
      expect(subject(dataStraight).length).toEqual(4);
    });

    test("content 4 element", () => {
      expect(subject(dataStraight)[3]).toEqual(
        {
          "children": [],
          "height": 50,
          "id": "4", "level": 3,
          "width": 100,
          "x": 450,
          "y": 0
        }
      );
    });
  });

});

describe("createPath, creates object with svg path and path id", () => {

  const subject = (dataObject) => {
    const nodeArray = createNodesArray(processTree(dataObject, 50, 50, 100, 50));
    return nodeArray
  };

  const nodeArray = subject(dataLong);

  test("path content, bezier", () => {
    expect(createPath(nodeArray[1], nodeArray[2], bezier)).toEqual(
      {
        path: 'M250 275 C275,275 275,125 300,125',
        id: 'node1--node2'
      }
    );
  });
  test("path content, straight", () => {
    expect(createPath(nodeArray[1], nodeArray[2], straight)).toEqual(
      {
        path: 'M 250 275 L 300 125',
        id: 'node1--node2'
      }
    );
  });
  test("path content, roundedAngles", () => {
    expect(createPath(nodeArray[1], nodeArray[2], roundedAngles)).toEqual(
      {
        path: 'M 250 275 L 258.3333333333333 275 Q 275 275, 275 258.3333333333333 L 275 141.66666666666666 Q 275 125, 291.6666666666667 125 L 300 125',
        id: 'node1--node2'
      }
    );
  });
});

describe("createConnectingLinesArray", () => {

  const subject = (dataObject) => {
    const treeElementWithCoords = processTree(dataObject, 50, 50, 100, 50);
    const connectingLinesArray = createConnectingLinesArray(treeElementWithCoords, 100, 50, bezier);
    return (connectingLinesArray);
  };

  test("count connecting lines 25 nodes", () => {
    expect(subject(dataLong).length).toBe(24);
  });

  test("is exist certain path in paths array ?", () => {
    const pathArray = subject(dataLong);
    expect(pathArray.find(path => path.path === 'M400 725 C425,725 425,825 450,825')).
      toEqual({ path: 'M400 725 C425,725 425,825 450,825', id: 'node12--node12_3' })
  });

  test("count connecting lines 1 node", () => {
    expect(subject(dataOne).length).toBe(0);
  });

});
