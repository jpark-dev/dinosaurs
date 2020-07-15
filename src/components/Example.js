// import React Hooks
import React, { useState, useEffect } from 'react';

const Example = () => {
    // declare [state, updateState] = useState(initialValue)
    const [state, setState] = useState(0);

    // render component
    return (
        <div>
            <button>
                Update State 
            </button>
        </div>
    )
}

export default Example;