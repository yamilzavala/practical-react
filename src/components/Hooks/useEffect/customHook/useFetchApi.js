import { useState, useEffect } from 'react';

//custom hook for get data from api
export const useFetchData = url => {
    const [state, setState] = useState({data: null, loading: false});

    useEffect(() => {
        setState({data: '', loading: true});
         fetch(url)
         .then( response => response.text())    
         .then(dataText => {
            setState({data: dataText, loading: false});
         })
         .catch(err => err);
    }, [url]);

    return state;
}