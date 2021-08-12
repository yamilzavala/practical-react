import { useRefRender } from "./customHook/useCounterRender";
import React, {memo} from 'react';

//memo is use for only render the component if the props that que component use were changed
export const Child = memo( ({increment}) => {
    useRefRender();
    return(
        <button onClick={() => increment(5)}>Increment</button>
    )
})

export default Child;
