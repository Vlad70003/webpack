import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { App } from "@/components/App";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { About } from "@/pages/about";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
var root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: _jsx(Suspense, { children: _jsx(About, {}) }),
            },
            {
                path: '/shop',
                element: _jsx(Suspense, { children: _jsx(Shop, {}) })
            }
        ]
    },
]);
var container = createRoot(root);
container.render(_jsx(RouterProvider, { router: router }));
