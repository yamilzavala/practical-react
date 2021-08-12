import React, {useState, useCallback} from 'react';
import Child from './Child'

export default function WrapperCallback () {
    const [data, setData] = useState(0);

    //useCallback avoid to render Child component by each change in the local state
    const incrementValue = useCallback((n) => {
        setData(state => state + n)
    },[setData]);
    
    
    return(
        <>
            <p>{data}</p>
            <Child increment={incrementValue}/>
        </>
    )
}