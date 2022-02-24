"use strict";
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
exports.createConnectingLinesArray = exports.createPath = exports.createNodesArray = exports.processTree = void 0;
function processTree(rootElement, yOffset, xOffset, cellwidth, cellHeight) {
    var maxY = 0;
    function calculateCoords(treeElement, level) {
        if (level === void 0) { level = 0; }
        var children = treeElement.children.map(function (child) {
            return calculateCoords(child, level + 1);
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
        return __assign(__assign({}, treeElement), { x: level * (curentXOffset + cellwidth), y: y, children: children, height: cellHeight, width: cellwidth, level: level });
    }
    return calculateCoords(rootElement);
}
exports.processTree = processTree;
function createNodesArray(node) {
    return node.children.reduce(function (nodes, child) { return __spreadArray(__spreadArray([], nodes, true), createNodesArray(child), true); }, [node]);
}
exports.createNodesArray = createNodesArray;
function createPath(parentNode, childNode, pathStyle) {
    var parentNodeX = parentNode.x + parentNode.width;
    var parentNodeY = parentNode.y + parentNode.height / 2;
    var childNodeX = childNode.x;
    var childNodeY = childNode.y + childNode.height / 2;
    var id = parentNode.id + "--" + childNode.id;
    return { path: pathStyle(parentNodeX, parentNodeY, childNodeX, childNodeY), id: id };
}
exports.createPath = createPath;
function createConnectingLinesArray(node, cellwidth, cellHeight, pathStyle) {
    var linesToChildren = node.children.map(function (child) { return createPath(node, child, pathStyle); });
    var connectingLines = node.children.reduce(function (lines, node) { return __spreadArray(__spreadArray([], lines, true), createConnectingLinesArray(node, cellwidth, cellHeight, pathStyle), true); }, linesToChildren);
    return connectingLines;
}
exports.createConnectingLinesArray = createConnectingLinesArray;
