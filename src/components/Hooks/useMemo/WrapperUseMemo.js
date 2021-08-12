import React, {useMemo, useState} from 'react';
import { useFetchData } from '../useEffect/customHook/useFetchApi';

function getLongestWord(arr) {
    if(!arr) return[];

    console.log('getting a longest word...');

    let longestWord = '';
    
    JSON.parse(arr).forEach(line => line.split(' ')
       .forEach(word => {
           if (word.length > longestWord.length) {
            longestWord = word;
           }
       }));

    return longestWord;
}

const WrapperUseMemo = () => {
    const [count, setCount] = useState(0);
    const {data} = useFetchData('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json');    
    const longestWordOfText = useMemo(() => getLongestWord(data),[data]);    

    return(
        <>
            State local: {count} <br/>   
            <button onClick={() => {setCount(c => c+1)}}>Increment</button> <br/>  
            <p>Longest word: {longestWordOfText}</p>
        </>
    )
}

export default WrapperUseMemo;