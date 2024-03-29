import React from 'react';
import {Link, Outlet} from "react-router-dom";

import List from "@packages/shared/src/List";

// @ts-ignore
import a from "shop/A";
// @ts-ignore
import Shop from "shop/Shop";

export const App = () => {

    const y = ['sasad', '12121', 'dsadsa']
    return <div>
        <Link to='/admin/about'>about</Link>
        <br/>
        <Link to='/shop/main'>shop</Link>
        <List arr={y} />
        <Shop/>
        <Outlet />
    </div>
}