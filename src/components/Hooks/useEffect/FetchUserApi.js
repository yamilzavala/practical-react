import  React, {useState, useSffect, useEffect} from 'react';
import { useFetchData } from './customHook/useFetchApi';

export default function FetchUserApi () {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState(null);

    //useEffect local
    useEffect(()=> {
        document.title = `You have clicked ${count} times!`;
    }, [count]);

    //Similar to compoentDidMount and componentWillUnmount 
    //useEffect get data from api
    useEffect(async () => {
        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        const [item] = data.results;
        setUser(item);
    },[]);

    //useEffect with custom hook
    const url = 'https://api.randomuser.me/';
    const {data, loading} = useFetchData(url);
    return (        
        <>
            {count}
            <button onClick={() => setCount(count+1)}>Click me</button> <br/>

            {user && <div>{user.name.first}</div>} <br/>

            {loading ? <div>Loading</div> : <div>{data}</div>}
        </>
    )
}