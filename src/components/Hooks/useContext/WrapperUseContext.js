import React, {useState, useContext} from 'react';
import Likes from './Likes';
import LikesAndComments from './LikesAndComments';

export const Context = React.createContext();

export default function WrapperUseContext () {
    const [data, setData] = useState({likes: 0, comments: 0});
    return (                
        <Context.Provider value={data}>
                <button onClick={() => setData(state => ({...state, likes: state.likes+1}))}>Increment likes</button> <br/>
                <button onClick={() => setData(state => ({...state, comments: state.comments+1}))}>Increment comments</button> <br/>
                <pre>{JSON.stringify(data)}</pre>
                <LikesAndComments/> <br/>
                <Likes/> 
                {/* <Consumer/> */}
        </Context.Provider>        
    )
}

// function Consumer () {
//     const dataFromContext  = useContext(Context);
//     return (
//         <div>{dataFromContext.likes}</div>
//     )
// }