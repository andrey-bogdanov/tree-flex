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
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeGraphFlex = void 0;
var React = require("react");
require("./tree-styles.css");
var path_shapes_1 = require("./path-shapes");
var tree_build_functions_1 = require("./tree-build-functions");
var TreeGraphFlex = /** @class */ (function (_super) {
    __extends(TreeGraphFlex, _super);
    function TreeGraphFlex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeGraphFlex.prototype.render = function () {
        var _a = this.props, nodeWidth = _a.nodeWidth, nodeHeight = _a.nodeHeight, data = _a.data, yOffset = _a.yOffset, xOffset = _a.xOffset, lineClassName = _a.lineClassName, nodeBoxClassName = _a.nodeBoxClassName, content = _a.nodeContent;
        var pathStyle = typeof this.props.pathShape == "function" ? this.props.pathShape : path_shapes_1.default[this.props.pathShape];
        var dataTree = (0, tree_build_functions_1.processTree)(data, yOffset, xOffset, nodeWidth, nodeHeight);
        var dataList = (0, tree_build_functions_1.createNodesArray)(dataTree);
        var _b = dataList.reduce(function (limits, node) { return ({
            width: Math.max(limits.width, node.x + node.width),
            height: Math.max(limits.height, node.y + node.height)
        }); }, { width: 0, height: 0 }), width = _b.width, height = _b.height;
        var connectingLines = (0, tree_build_functions_1.createConnectingLinesArray)(dataTree, nodeWidth, nodeHeight, pathStyle, width);
        function reversX(node) {
            return __assign(__assign({}, node), { x: width - node.x - node.width });
        }
        return (React.createElement("div", null,
            React.createElement("div", { className: "root", style: { width: width, height: height } },
                React.createElement("div", null, dataList.map(function (node) { return (React.createElement("div", { style: { height: nodeHeight, width: nodeWidth, top: node.y, left: reversX(node).x }, className: nodeBoxClassName, key: node.id }, content(node))); })),
                React.createElement("svg", { width: width, height: height }, connectingLines.map(function (path) { return (React.createElement("path", { d: path.path, className: lineClassName, key: path.id })); })))));
    };
    ;
    /**
    * @class Tree
    * builds tree graph from user's object. Graph exist is rectangles(nodes) and connecting lines.
    * @param {TreeElement} data - source user's object.
    * @param {number} nodeWidth - width of the rectangle(node) in pixels, that user's content is placed in. Not mandatory. 100 pixels by default.
    * @param {number} nodeHeight - height of the node in pixels. 50 pixels by default.
    * @param {number | function} xOffset -  distance by x between adjacent two nodes. By default 50 pixels. Also, it may be a custom function.
    * @param {number} yOffset -  distance by y between adjacent two nodes. By default 50 pixels.
    * @param {PathShape | PathFunction} pathShape - funcion, calculates svg lines between two nodes. There are three offered functions. "bezier" by default. Also, it may be a custom function.
    * @param {function} nodeContent - user's function, returns HTML element, which will be placed into node box.
    * @param {string} lineClassName - connecting lines className. Locates in tree.style.css. By default "connectingLine".
    * @param {string} nodeBoxClassName - className, defines style of node view. Locates in tree.style.css. By default "nodeBox".
    * @returns {HTMLElement} renders tree
    */
    TreeGraphFlex.defaultProps = {
        pathShape: path_shapes_1.default.bezier,
        nodeWidth: 100,
        nodeHeight: 50,
        lineClassName: "connectingLine",
        nodeBoxClassName: "nodeBox",
        xOffset: 50,
        yOffset: 50,
    };
    return TreeGraphFlex;
}(React.Component));
exports.TreeGraphFlex = TreeGraphFlex;
;
