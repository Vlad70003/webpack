import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return <div>
        <Link to='/about'>about</Link>
        <br/>
        <Link to='/shop'>shop</Link>
        <h1>Home</h1>
        <Outlet />
    </div>
}