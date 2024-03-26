import React, {useState} from 'react';
import "../styles/App.scss";
export const App = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>{count}</h2>

            <div>
                <button onClick={() => setCount(count => count - 1)}>-</button>
                <button onClick={() => setCount(count => count + 1)}>+</button>
            </div>
        </div>
    );
};