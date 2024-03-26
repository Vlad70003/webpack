import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import classes from "@/styles/App.module.scss";
import { Link, Outlet } from "react-router-dom";
import Arrow from "@/assets/navigation-right-arrow-button.svg";
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM: ", __PLATFORM__] }), _jsx(Link, { to: '/about', children: "About" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "Shop" }), _jsx("h2", { className: classes.title, children: count }), _jsxs("div", { children: [_jsx("button", { onClick: function () { return setCount(function (count) { return count - 1; }); }, children: "-" }), _jsx("button", { onClick: function () { return setCount(function (count) { return count + 1; }); }, children: "+" })] }), _jsx("img", { src: Arrow }), _jsx(Outlet, {})] }));
};
