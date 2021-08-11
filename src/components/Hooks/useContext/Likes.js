import React, {useContext, useRef, memo} from 'react';
import { Context } from './WrapperUseContext';

const Likes = memo(() => {    
    const renders = useRef(0);
    const {likes} = useContext(Context)    
    return (
        <div>
           <p>Number likes: {likes}</p>
           <p>Renders from Likes component: {renders.current++}</p>
        </div>
    )
})

export default Likes;