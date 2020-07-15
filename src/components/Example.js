// import React Hooks
import React, { useState, useEffect } from 'react';
import './example.css';

const Example = () => {
    // declare a [state, updateState] = set(initialValue) 
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update document title using brower API 
        document.title = `You clicked ${count} times`;
    });

    // render component
    return (
        <div>
            <p> Number of clicks: </p>
            <div id="counter"> {count} </div>
            <button onClick={ () => setCount(count + 1) } >
                Click Me! 
            </button>
        </div>
    )
}

export default Example;