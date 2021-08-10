import React, {useEffect} from 'react';

const Hello = () => {

    //useEffect without a render dependency
    useEffect(() => {
        console.log('Hello did mount');
    
        return () => {
            console.log('Hello will unmount');
        }
    }, []);

    return(
        <div>Hello component works!</div>
    )
}

export default Hello;