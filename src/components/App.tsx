import {useState} from 'react';
import classes from "@/styles/App.module.scss";
import {Link, Outlet} from "react-router-dom";
import Arrow from "@/assets/navigation-right-arrow-button.svg";

export const App = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>PLATFORM: {__PLATFORM__}</h1>
            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>

            <h2 className={classes.title}>{count}</h2>

            <div>
                <button onClick={() => setCount(count => count - 1)}>-</button>
                <button onClick={() => setCount(count => count + 1)}>+</button>
            </div>

            <img src={Arrow}/>

            <Outlet/>
        </div>
    );
};