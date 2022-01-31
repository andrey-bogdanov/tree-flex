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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./box.content.styles.scss");
var BoxContent = /** @class */ (function (_super) {
    __extends(BoxContent, _super);
    function BoxContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxContent.prototype.render = function () {
        var elementId = this.props.node.id;
        return (React.createElement("div", { className: "root" },
            React.createElement("div", { className: "root" },
                this.props.node.id,
                React.createElement("div", { className: "shadowBox" }, " "))));
    };
    return BoxContent;
}(React.Component));
exports.default = BoxContent;
