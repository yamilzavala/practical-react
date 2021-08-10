import React, {useRef} from 'react';

const UseRefComponent = () => {

    //useEffect to show the increment in a component with each call (render) in the father component
    const count = useRef(0);
    console.log(count.current++);
    return(
        <div>Render {count.current} in UseRefComponent</div>
    )
}

export default UseRefComponent;