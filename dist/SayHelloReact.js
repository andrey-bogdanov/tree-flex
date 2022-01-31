"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayHelloReact = void 0;
var React = require("react");
var SayHelloReact = function (_a) {
    var text = _a.text;
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "My text is ",
            text)));
};
exports.SayHelloReact = SayHelloReact;
