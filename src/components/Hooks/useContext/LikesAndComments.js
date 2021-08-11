import React, {useContext} from 'react';
import { Context } from './WrapperUseContext';

const LikesAndComments = () => {   
    const {likes, comments} = useContext(Context)
    return (
        <div>
           <p>Number likes and comments: {likes + comments}</p>           
        </div>
    )
}

export default LikesAndComments;