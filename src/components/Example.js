// import React Hooks
import React, { useState, useEffect } from 'react';

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
            <p> You clicked {count} times </p>
            <button onClick={ () => setCount(count + 1) } >
                Click Me! 
            </button>
        </div>
    )
}

export default Example;