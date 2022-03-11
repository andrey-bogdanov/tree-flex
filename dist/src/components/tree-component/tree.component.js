"use strict";
var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = exports.PathShape = void 0;
var React = require("react");
require("./tree.styles.css");
var pathShapes_1 = require("./pathShapes");
var PathShape;
(function (PathShape) {
  PathShape["Bezier"] = "bezier";
  PathShape["Straight"] = "straight";
  PathShape["RoundedAngles"] = "roundedAngles";
})(PathShape = exports.PathShape || (exports.PathShape = {}));
function processTree(rootElement, yOffset, xOffset, cellWidht, cellHeight) {
  var maxY = 0;
  function calculateCoords(treeElement, level) {
    if (level === void 0) { level = 0; }
    var children = treeElement.children.map(function (ch) {
      return calculateCoords(ch, level + 1);
    });
    var y;
    if (children.length !== 0) {
      y = Math.round((children[0].y + children[children.length - 1].y) / 2);
    }
    else {
      y = maxY;
      maxY = maxY + yOffset + cellHeight;
    }
    var curentXOffset = typeof xOffset === "number" ? xOffset : xOffset(level);
    return __assign(__assign({}, treeElement), { x: level * (curentXOffset + cellWidht), y: y, children: children, height: cellHeight, widht: cellWidht, level: level });
  }
  return calculateCoords(rootElement);
}
function createNodesArray(node) {
  return node.children.reduce(function (nodes, child) { return __spreadArray(__spreadArray([], nodes, true), createNodesArray(child), true); }, [node]);
}
function createPath(parentNode, childNode, pathStyle) {
  var parentNodeX = parentNode.x + parentNode.widht;
  var parentNodeY = parentNode.y + parentNode.height / 2;
  var childNodeX = childNode.x;
  var childNodeY = childNode.y + childNode.height / 2;
  var id = parentNode.id + "--" + childNode.id;
  return { path: pathStyle(parentNodeX, parentNodeY, childNodeX, childNodeY), id: id };
}
function createConnectingLinesArray(node, cellWidht, cellHeight, pathStyle) {
  var linesToChildren = node.children.map(function (child) { return createPath(node, child, pathStyle); });
  var connectingLines = node.children.reduce(function (lines, node) { return __spreadArray(__spreadArray([], lines, true), createConnectingLinesArray(node, cellWidht, cellHeight, pathStyle), true); }, linesToChildren);
  return connectingLines;
}
var Tree = /** @class */ (function (_super) {
  __extends(Tree, _super);
  function Tree() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Tree.prototype.render = function () {
    var _a = this.props, nodeWidth = _a.nodeWidth, nodeHeight = _a.nodeHeight, data = _a.data, yOffset = _a.yOffset, xOffset = _a.xOffset, lineClassName = _a.lineClassName, content = _a.nodeContent;
    var pathStyle = typeof this.props.pathShape == "function" ? this.props.pathShape : pathShapes_1.default[this.props.pathShape];
    var dataTree = processTree(data, yOffset, xOffset, nodeWidth, nodeHeight);
    var dataList = createNodesArray(dataTree);
    var connectingLines = createConnectingLinesArray(dataTree, nodeWidth, nodeHeight, pathStyle);
    var _b = dataList.reduce(function (limits, node) {
      return ({
        width: Math.max(limits.width, node.x + node.widht),
        height: Math.max(limits.height, node.y + node.height)
      });
    }, { width: 0, height: 0 }), width = _b.width, height = _b.height;
    console.log("0000");
    return (React.createElement("div", null,
      React.createElement("div", { className: "root", style: { width: width, height: height } },
        React.createElement("div", null, dataList.map(function (node) { return (React.createElement("div", { style: { height: nodeHeight, width: nodeWidth, top: node.y, left: node.x }, className: "nodeBox", key: node.id }, content(node))); })),
        React.createElement("svg", { width: width, height: height }, connectingLines.map(function (path) { return (React.createElement("path", { d: path.path, className: lineClassName, key: path.id })); })))));
  };
  Tree.defaultProps = {
    pathShape: pathShapes_1.default.bezier,
    nodeWidth: 100,
    nodeHeight: 50,
    lineClassName: "connectingLine",
    xOffset: 50,
    yOffset: 50,
  };
  return Tree;
}(React.Component));
exports.Tree = Tree;
