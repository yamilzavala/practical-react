import { useState, useEffect } from 'react';

//custom hook for get data from api
export const useFetchData = url => {
    const [state, setState] = useState({data: '', loading: false});

    useEffect(() => {
        setState({data: '', loading: true});
         fetch(url)
         .then( response => response.text())    
         .then(dataText => {
            setState({data: dataText, loading: false});
             console.log(dataText);
         })
         .catch(err => err);
    }, [url]);

    return state;
}