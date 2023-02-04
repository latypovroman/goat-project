import React from 'react';
import "./Counter.scss"

export const Counter = () => {

    const [count, setCount] = React.useState(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={increment}>inc</button>
        </div>
    );
};

export default Counter;