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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Large = exports.Small = exports.Magenta = exports.ZeldaGreen = exports.Regular = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyButton_1 = require("../../components/my-button/MyButton");
exports.default = {
    title: "NES UI/Button/MyButton",
    component: MyButton_1.MyButton,
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyButton_1.MyButton, __assign({}, args))); };
exports.Regular = Template.bind({});
exports.Regular.args = {
    label: "Regular",
    type: "regular",
};
exports.ZeldaGreen = Template.bind({});
exports.ZeldaGreen.args = {
    label: "Zelda Green",
    type: "zelda",
};
exports.Magenta = Template.bind({});
exports.Magenta.args = {
    label: "Magenta",
    type: "magenta",
};
exports.Small = Template.bind({});
exports.Small.args = {
    size: "small",
    label: "small button",
    type: "regular",
    onClick: function () { return console.log("Hi Stranger!"); },
};
exports.Large = Template.bind({});
exports.Large.args = {
    size: "large",
    label: "LARGE BUTTON",
    type: "regular",
    onClick: function () { return console.log("Hi Stranger!"); },
};
