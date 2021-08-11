import { useRefRender } from "./customHook/useCounterRender";
import React, {memo} from 'react';

export const Child = memo( ({increment}) => {
    useRefRender();
    return(
        <button onClick={() => increment(5)}>Increment</button>
    )
})

export default Child;
